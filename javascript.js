player1_count = 0;
player2_count = 0;
board_length = 3;

function winner () {
  if (player1_count > player2_count) {
    return 'player 1';
  } else {
    return 'player 2';
  }
}

function game_over () {
  if (player1_count >= board_length || player2_count >= board_length){
    alert("Game over " + winner() + "wins!");
    location.reload();
  }
}

$(document).ready( function(){
  $('body').on('keyup', function (e) {
    game_over();
    if (e.which === 65) {
      player1_count ++;
      var strip = $('#player1_strip');
      strip.find('.active').next().addClass('active');
      strip.find('.active:first').removeClass('active');
    } else if (e.which === 76) {
      player2_count ++;
      var strip = $('#player2_strip');
      strip.find('.active').next().addClass('active');
      strip.find('.active:first').removeClass('active');
    }
  });
});

