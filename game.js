const {
  config,
} = require('./libs/framework');

const {
  images,
  audios
} = require('./js/res');

const {
  preload,
  on_res_progress,
  on_res_loaded,
  on_time,
  on_collision,
  setup,
  update,
  draw
} = require('./js/index');

config({
  res: {
    images: images,
    audios: audios
  },
  life: {
    preload: preload,
    setup: setup,
    update: update,
    draw: draw,
  },
  event: {
    on_collision: on_collision,
    on_time: on_time,
    on_res_progress: on_res_progress,
    on_res_loaded: on_res_loaded
  }
});