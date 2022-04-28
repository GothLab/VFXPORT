$('.pic').on('mouseover', chesrc);

function chesrc () {
     
      var src = $(this).css('background');
      $('.vision').css('background',src);
         initDownload();initDownloadV();
};


	
$('.card').mouseenter( function(){ $(this).css('opacity','0.20');}).mouseleave( function(){ $(this).css('opacity','1');});





$('#tab22').on('click',fire);

function fire() {
        $('#tab2').trigger('click');
};



var imagePath  = 'yo';




function initDownload() {
        
$(".pic").on("click", function (el,index) {
        
         imagePath = $(this).css('background-image');

        imagePath = imagePath.replace('url(', '').replace( ')', '').replace('Thumbnails','Resource').replace('"','').replace('"','');
        
 var index = $(this).index();   
        
        
        var fileName = cat + '_' + sub + '_' + index + '.png';
       // var fileName = cat + '_' + sub + '_' + index + '.png';
        saveAs(imagePath, fileName); // This is a function please download the file from the link
        //Download file from this link  
        // https://raw.githubusercontent.com/eligrey/FileSaver.js/master/dist/FileSaver.js
    });

};



function initDownloadV() {
        
$(".vector").on("click", function (el,index) {
        
         imagePath = $(this).css('background-image');

    
        
 var index = $(this).index();   
        
        
        var fileName = cat + '_' + sub + '_' + index + '.svg';
       // var fileName = cat + '_' + sub + '_' + index + '.png';
        saveAs(imagePath, fileName); // This is a function please download the file from the link
        //Download file from this link  
        // https://raw.githubusercontent.com/eligrey/FileSaver.js/master/dist/FileSaver.js
    });

}







