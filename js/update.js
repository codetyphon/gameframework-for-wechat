const update = (game_objects) => {
  game_objects.forEach(g => {
    g.position.x += g.vector.x;
    g.position.y += g.vector.y;
    if (g.role == "player") {
      if (g.position.x >= window.innerWidth - g.size.width) {
        g.position.x = window.innerWidth - g.size.width;
      }
      if (g.position.x <= 0) {
        g.position.x = 0;
      }
      if (g.position.y <= 0) {
        g.position.y = 0;
      }
      if (g.position.y >= window.innerHeight - g.size.height) {
        g.position.y = window.innerHeight - g.size.height;
      }
    }
    if (g.role == "fire") {
      if (g.position.y <= -1 * g.size.height) {
        g.dead = true;
      }
    }
    if (g.role == "enemy") {
      if (g.position.y >= window.innerHeight) {
        g.dead = true;
      }
    }
  });
}
module.exports = {
  update
}