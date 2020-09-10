const game = new Game();
/**
 * adds a click event to the button with id of begin-game
 */
document.getElementById('begin-game').addEventListener("click", function(){
  game.startGame();
  this.style.display = "none";
  document.getElementById('play-area').style.opacity = '1';
});
/**
 * Listens for keyboard presses.
 */
document.addEventListener('keydown',function(event){
  game.handleKeydown(event);
});
