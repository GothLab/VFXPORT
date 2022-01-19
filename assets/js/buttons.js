$('.card').on('mouseover', chesrc);
function chesrc () {
     
      var src = $(this).css('background');
      $('.vision').css('background',src);
};


	
$('.card').mouseenter( function(){ $(this).css('opacity','0.20');}).mouseleave( function(){ $(this).css('opacity','1');});

$('#tab22').on('click',fire);
function fire() {
        $('#tab2').trigger('click');
};