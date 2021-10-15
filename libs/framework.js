import './weapp-adapter';
import './symbol';

const {
  add_image,
  add_audio,
  get_image,
  get_audio,
  loading_res
} = require('./res');
const {
  sprite,
  static_image,
  remove_dead_sprites,
  get_game_objects,
  set_game_objects
} = require('./sprite');

const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

let time = 0;
let is_game_over = false;
let score = 0;
let game_life = "ready"; // ready,playing,gameover

const get_game_status = () => {
  return game_life;
}

const get_score = () => {
  return score;
}

const change_score = (s) => {
  score += s;
}

const gameover = () => {
  is_game_over = true;
}

const restart = () => {
  time = 0;
  is_game_over = false;
  score = 0;
  // set_game_objects(get_game_objects().filter((g) => {
  //   return g.role == "player";
  // }));
  set_game_objects([]);
  life.setup(sprite, static_image, get_image, get_audio);
}

let life = {
  preload: () => {},
  setup: () => {},
  update: (get_image, get_audio, ) => {},
  draw: (game_objects) => {},
}

let event = {
  on_collision: () => {},
  on_time: () => {},
  on_res_progress: (progress, ctx, get_image, get_audio) => {
    console.log(progress);
  },
  on_res_loaded: (ctx, get_image, get_audio) => {
    console.log('all res loaded');
  }
}

const config = (conf) => {
  let {
    res,
    life: l,
    event: e
  } = conf;

  life = l;
  event = e;

  const {
    images,
    audios
  } = res; // images and audios list

  life.preload(ctx);

  //add res
  images.forEach(image => {
    const {
      id,
      src
    } = image;
    add_image({
      id,
      src
    });
  });
  audios.forEach(audio => {
    const {
      id,
      src
    } = audio;
    add_audio({
      id,
      src
    });
  });
  loading_res(event.on_res_progress, event.on_res_loaded, start, ctx, sprite, static_image, get_image, get_audio);
}

const check_collision = (a, b) => {
  const a_left = a.position.x;
  const a_right = a.position.x + a.size.width;
  const a_top = a.position.y;
  const a_bottom = a.position.y + a.size.height;
  const b_left = b.position.x;
  const b_right = b.position.x + b.size.width;
  const b_top = b.position.y;
  const b_bottom = b.position.y + b.size.height;
  return a_right > b_left &&
    a_left < b_right &&
    a_bottom > b_top &&
    a_top < b_bottom;
}


const loop = () => {
  if (!is_game_over) {
    time += 1;
    event.on_time(time, sprite, between, get_image, get_audio);
    life.update(get_game_objects());

    const game_objects = get_game_objects();
    game_objects.forEach(a => {
      game_objects.forEach(b => {
        if (check_collision(a, b)) {
          event.on_collision(a, b, gameover, restart, sprite, static_image, get_image, get_audio, change_score);
        }
      });
    });
    remove_dead_sprites();
  }
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  life.draw(get_game_objects(), ctx, get_score);
  window.requestAnimationFrame(loop);
}

const start = () => {
  console.log('started');
  life.setup(sprite, static_image, get_image, get_audio);
  window.requestAnimationFrame(loop);
}

const between = (min, max) => {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}
module.exports = {
  config,
  start,
  get_game_status,
  restart,
}