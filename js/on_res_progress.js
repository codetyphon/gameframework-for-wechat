const on_res_progress = (progress, ctx, get_image, get_audio) => {
  //progress (0-1)
  console.log(`loading ${progress*100}%`);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = '#c2c2c2';
  ctx.fillRect(40, window.innerHeight / 2, window.innerWidth - 80, 2);
  ctx.fillStyle = 'green';
  ctx.fillRect(40, window.innerHeight / 2, (window.innerWidth - 80) * progress, 2);
  ctx.font = '20px serif';
  const text = ctx.measureText(`loading... ${progress*100}%`);
  ctx.fillText(`loading... ${progress*100}%`, window.innerWidth / 2 - text.width / 2, window.innerHeight / 2 - 20, text.width);
}
module.exports = {
  on_res_progress
}