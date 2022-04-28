
var cat = 0;
var sub = 0;
//PATH FOR ADD ON FOR LIBRARY

var path = 'https://gothlab.github.io/VFXPORT/Thumbnails/'  //localStorage.getItem("PATH");

$('#input').attr('placeholder',path);
$('#submiter').on('click',function(){
        
        path = $('#input').val();
        localStorage.setItem("PATH", path);
        $('#input').attr('placeholder',path);
})



//// FUNCTION ON CLICK TO TRIGGER RENDER THUMBS FUNCTION

$('.trg').on('click',function(){

$('tbody').empty();
cat = $(this).attr('cat');
sub = $(this).attr('sub');
var count = $(this).attr('count');
var vcount = $(this).attr('vcount');

pathx = path + cat + '/' + sub + '/';
tabler(pathx,count,vcount);
})



function tabler(x,y,z) {  
//////////create table
var ZZ = z; //all vector
var YY = y; //all 
pathz = x;
var format = '.png'
//var td1 = '<td><span class="number">№</span></td>';
var td2 = "<div class='thumb pic'></div>";
//var td3 = "<div class='thumb svg'></div>";
//var td3 = '<td class="width" style="text-align: left;font-size: 8px;"><span class="height"></span><span class="height"></span><span class="format">PNG</span></td>';
        
var PATHX = td2;       
var html = [];
for (i = 0; i < YY; i++) {
    html.push(PATHX);
}
$('tbody').append( html.join('') );   
        
        HOV();
        //CLK();

//var ZZZ = YY - ZZ;
        

   /*    
/////count table rows        
$('tbody').find('tr').each(function(index, el){
 $(this).find('.number').text(index+1);    
        
        
        $('.thumb').on( "mouseover", function(){  
        var iPath = $(this).css('background-image');
        $('.vision').css('background-image',iPath);     
});
        
        
})    
*/
        
//////background image add and count/////////  
$('tbody').find('.thumb').each(function(index, el){
var XX = index;
$(this).css('background-image','url(' + pathz + XX + format + ')' );
});


/*
$('tbody').find('tr').each(function(index, el){   
                         
var imgx = $(this).find('.bg').css('background-image');
imgx = imgx.replace('url(', '').replace( ')', '');        
        
var tmpImg = new Image();
tmpImg.src= imgx; 

$(tmpImg).one('load',function(){
  var orgWidth = tmpImg.width;
  var orgHeight = tmpImg.height;
   
});

$(this).find('.width').text(orgWidth);
$(this).find('.height').text(orgHeight);
        
        

                           
                           });
        
        */
        
        
       /* $('tbody').find('.thumb').slice(ZZZ, YY).each(function(){  

   var url = $(this).css('background-image');
   var vurl = url.replace('png','svg');
   $(this).css('background-image',vurl);

})*/
        
         td2 = "<div class='thumb vector'></div>";
        PATHX = td2; 
//var td3 = '<td class="width" style="text-align: left;font-size: 8px;"><span class="height"></span><span class="height"></span><span class="format">PNG</span></td>';
        
    
        
        
       var html = [];
for (i = 0; i < ZZ; i++) {
    html.push(PATHX);
}
$('tbody').append( html.join('') );   
        
        HOV();
//CLK();
        
       format = '.svg'
        
        pathz = pathz.replace('Thumbnails','Resource');
        $('tbody').find('.vector').each(function(index, el){
var XX = index;
$(this).css('background-image','url(' + pathz + XX + format + ')' );
});
 
      initDownload() ;
};






     
        


function HOV () {

$('.pic').on( "mouseover", function(){  
        var iPath = $(this).css('background-image');
        
        iPath = iPath.replace('Thumbnails','Previews');
        
        $('.vision').css('background-image',iPath);     
});

};



/*

var DISCO = "E:/!MORFX/!Files/Abstract/Crystal/0.png";
function CLK () {

$('.thumb').on('click',function(){

  var imgx = $(this).css('background-image');   
        
       var XX = imgx.replace('url(', '').replace( ')', '').replace('"file:///', '').replace('"','');
        
       
        
         DISCO =  XX;
        
        $('#btn_test').click();
        
});
};


*/
