$(document).ready(function(){
    const playbutton =  $('#play__button');
    const video=$('#video__content').get(0);
    playbutton.on('click',function(){
      
       if (playbutton.hasClass('.playing')){
        playbutton.removeClass('.playing');
        video.pause();
        
    } else{
        
        playbutton.addClass('.playing');
        video.play();
        $(mark).css('display','none');
       }
      
  });
  });


  $(document).ready(function(){
    const video=$('#video__content').get(0);
    const mark=$('#playmark');
    $(video).on('click',function(){
      
        video.paused ? video.play() : video.pause();
        $(mark).css('display','none');
  });
  });

  $(document).ready(function(){
    const mute =  $('#mute');
    const video=$('#video__content').get(0);
    mute.on('click',function(){
      
       if ($(video).prop('muted')){
        
       
        $(video).prop('muted', false);
    } else{
     
        
        $(video).prop('muted', true);
       }
      
  });
  });
  
  $(document).ready(function(){
    const volume =  $('#volume__bar');
    const video=$('#video__content').get(0);
   
       
        $(document).on('input change', '#volume__bar', function() {
           
            $(video).prop('volume',$(volume).val());
        });
          

  });

  $(document).ready(function(){
    const seeker =  $('#progress__bar');
    const video=$('#video__content').get(0);
   
       
        $(document).on('input change', '#progress__bar', function() {
           
            $(video).prop('currentTime',$(seeker).val());
        });
          

  });

  $(document).ready(function(){
    const seeker =  $('#progress__bar');
    const video=$('#video__content').get(0);
    var  viddur=$(video).prop('duration'); 
        
   

        $(document).on('input change', '#progress__bar', function() {
           
            let seektime=viddur*($(seeker).val()/100);


            $(video).prop('currentTime',seektime);
        });
          

  });

  $(document).ready(function(){
    const seeker =  $('#progress__bar');
    const video=$('#video__content').get(0);
    
        
   

        $(video).on('timeupdate', function() {
           
            let nt=$(video).prop('currentTime')*(100/$(video).prop('duration'));


            $(seeker).prop('value',nt);
        });
          

  });

  