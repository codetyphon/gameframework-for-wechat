const on_res_loaded = (start, ctx, get_image, get_audio) => {
  console.log('all res loaded');
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  // start();
  // ctx.fillStyle = 'rgba(0, 0, 200, 1)';
  // ctx.fillRect(10, 30, 50, 50);
  const start_button = {
    width: 200,
    height: 60,
    x: window.innerWidth / 2 - 100,
    y: window.innerHeight / 2 - 30
  }

  ctx.drawImage(get_image('play'), start_button.x, start_button.y, start_button.width, start_button.height);
  wx.onTouchStart((res) => {
    const X = res.changedTouches[0].clientX;
    const Y = res.changedTouches[0].clientY;

    if (X > start_button.x &&
      X < start_button.x + start_button.width &&
      Y > start_button.y &&
      Y < start_button.y + start_button.height) {
      wx.offTouchStart();
      start();
    }
  });
}
module.exports = {
  on_res_loaded
}