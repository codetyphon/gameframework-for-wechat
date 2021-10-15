const on_time = (time, sprite, between, get_image, get_audio) => {
  if (time % 30 == 0) {
    sprite({
      role: "enemy",
      x: between(0, window.innerWidth - 80),
      y: -50,
      vx: 0,
      vy: 2,
      width: 80,
      height: 50,
      scale: 1,
      img: get_image('enemy')
    });
  }
}
module.exports = {
  on_time
}