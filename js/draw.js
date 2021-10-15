const draw = (game_objects, ctx, get_score) => {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  game_objects.forEach(g => {
    const {
      img,
      position,
      size
    } = g
    const {
      x,
      y
    } = position;
    const {
      width,
      height
    } = size;
    ctx.drawImage(g.img, x, y, width, height);
  });
  ctx.fillStyle = 'red';
  ctx.font = '14px serif';
  ctx.fillText(`SCORE:${get_score()}`, 20, 30);
}

module.exports = {
  draw
}