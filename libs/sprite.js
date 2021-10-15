let game_objects = [];
const sprite = (conf) => {
  const {
    role,
    x,
    y,
    vx,
    vy,
    width,
    height,
    scale,
    img
  } = conf;
  const s = {
    role: role,
    size: {
      width: width,
      height: height,
      scale: scale
    },
    position: {
      x: x,
      y: y
    },
    vector: {
      x: vx,
      y: vy
    },
    img: img,
    data: {},
    blood: 1, // 0-1
    life: 1,
    dead: false,
  }
  game_objects.push(s);
  return s;
}

const static_image = (conf) => {
  const {
    x,
    y,
    width,
    height,
    img
  } = conf;
  const s = {
    role: "static_image",
    size: {
      width: width,
      height: height,
      scale: 1
    },
    position: {
      x: x,
      y: y
    },
    vector: {
      x: 0,
      y: 0
    },
    img: img,
    data: {},
    blood: 1, // 0-1
    life: 1,
    dead: false,
  }
  game_objects.push(s);
  return s;
}

const remove_dead_sprites = () => {
  game_objects = game_objects.filter((g) => {
    return !g.dead;
  });
}

const set_game_objects = (arr) => {
  game_objects = arr;
}

const get_game_objects = () => {
  return game_objects;
}

module.exports = {
  sprite,
  static_image,
  remove_dead_sprites,
  get_game_objects,
  set_game_objects
}