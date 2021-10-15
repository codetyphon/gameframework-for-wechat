const on_time = (time, sprite, between, get_image, get_audio) => {
  if (time % 30 == 0) {
    sprite({
      role: "enemy",
      x: between(0, window.innerWidth - 50),
      y: -30,
      vx: 0,
      vy: 2,
      width: 50,
      height: 30,
      scale: 1,
      img: get_image('enemy')
    });
  }
}
module.exports = {
  on_time
}