const setup = (sprite, static_image, get_image, get_audio) => {
  const bgm = get_audio('bgm');
  bgm.loop = true;
  bgm.play();
  console.log('setup')
  const player = sprite({
    role: "player",
    x: window.innerWidth / 2 - 40,
    y: window.innerHeight - 128,
    vx: 0,
    vy: 0,
    width: 80,
    height: 56,
    scale: 1,
    img: get_image('player')
  });

  let x = 0;
  let y = 0;
  let vx = 0;
  let vy = 0;
  let buf = 10;
  wx.onTouchStart((res) => {
    const X = res.changedTouches[0].clientX;
    const Y = res.changedTouches[0].clientY;
    x = X;
    y = Y;

    const fire = sprite({
      role: "fire",
      x: player.position.x + player.size.width / 2 - 2,
      y: player.position.y,
      vx: 0,
      vy: -4,
      width: 4,
      height: 6,
      scale: 1,
      img: get_image('fire')
    });
    get_audio('bullet').play();
  })
  wx.onTouchMove((res) => {
    const X = res.changedTouches[0].clientX;
    const Y = res.changedTouches[0].clientY;
    if (Math.abs(x - X) > Math.abs(y - Y)) {
      //left or right
      vy = 0;
      if (x + buf < X) {
        vx = 2
      }
      if (x - buf > X) {
        vx = -2
      }
    }
    if (Math.abs(x - X) < Math.abs(y - Y)) {
      //up or down
      vx = 0;
      if (y + buf < Y) {
        vy = 2
      }
      if (y - buf > Y) {
        vy = -2
      }
    }
    x = X;
    y = Y;
    player.vector.x = vx;
    player.vector.y = vy;
  });
}
module.exports = {
  setup
}