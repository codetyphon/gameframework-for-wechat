const {
  preload
} = require('./preload');

const {
  on_res_progress
} = require('./on_res_progress');

const {
  on_res_loaded
} = require('./on_res_loaded');

const {
  on_time
} = require('./on_time');

const {
  on_collision
} = require('./on_collision');

const {
  setup
} = require('./setup');

const {
  update
} = require('./update');

const {
  draw
} = require('./draw');

module.exports = {
  preload,
  on_res_progress,
  on_res_loaded,
  on_time,
  on_collision,
  setup,
  update,
  draw
}