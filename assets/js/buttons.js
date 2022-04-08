$('.card').on('mouseover', chesrc);
function chesrc () {
     
      var src = $(this).css('background');
      $('.vision').css('background',src);
         initDownload();
};


	
$('.card').mouseenter( function(){ $(this).css('opacity','0.20');}).mouseleave( function(){ $(this).css('opacity','1');});





$('#tab22').on('click',fire);
function fire() {
        $('#tab2').trigger('click');
};




function initDownload() {
$(".thumb").each().on("click", function () {
        var imagePath = $(this).css('background-image');
        imagePath = imagePath.replace('url(', '').replace( ')', '').replace('Thumbnails','Resource');
        
        var cat = $(this).attr('cat');
         var sub = $(this).attr('sub');
        
        var fileName = cat + '_' + sub + '_' + index;
        saveAs(imagePath, fileName); // This is a function please download the file from the link
        //Download file from this link  
        // https://raw.githubusercontent.com/eligrey/FileSaver.js/master/dist/FileSaver.js
    });

}