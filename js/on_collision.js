const on_collision = (a, b, gameover, restart, sprite, static_image, get_image, get_audio, change_score) => {
  if (a.role == "fire" && b.role == "enemy") {
    a.dead = true;
    b.dead = true;
    change_score(1);
    get_audio('boom').play();
  }
  if (a.role == "player" && b.role == "enemy") {
    static_image({
      x: window.innerWidth / 2 - 150,
      y: window.innerHeight / 2 - 200,
      width: 300,
      height: 200,
      img: get_image('gameover')
    })
    const restart_button = {
      width: 200,
      height: 60,
      x: window.innerWidth / 2 - 100,
      y: window.innerHeight / 2
    }

    static_image({
      x: restart_button.x,
      y: restart_button.y,
      width: restart_button.width,
      height: restart_button.height,
      img: get_image('play')
    })
    wx.onTouchStart((res) => {
      const X = res.changedTouches[0].clientX;
      const Y = res.changedTouches[0].clientY;

      if (X > restart_button.x &&
        X < restart_button.x + restart_button.width &&
        Y > restart_button.y &&
        Y < restart_button.y + restart_button.height) {
        wx.offTouchStart();
        restart();
      }
    });
    gameover();
  }
}
module.exports = {
  on_collision
}