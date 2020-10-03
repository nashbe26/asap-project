
  
 $('#logo-image').attr('src','img/asap%202020%204.png');
$( "body" ).scroll(function(e) {

    if ($("body").scrollTop()==0){
       $('#logo-image').attr('src','img/asap%202020%204.png');
            $( "#title-text" ).css( "color","#fff" );
        $( ".icons-bars" ).css( "color","#fff" );
       
  $( ".bgs-transparent " ).css( "background","rgba(255, 255, 255, 0)" );
  $( ".bgs-transparent " ).css( "transition","background-color 500ms" );


    }else{
         $('#logo-image').attr('src','img/asap.png');
          $( "#title-text" ).css( "color","#01A89C" );
        $( ".icons-bars" ).css( "color","#01A89C" );
        $( "#title-text" ).css( "transition","color 500ms" );
        $( "#title-text" ).css( "transition","color 500ms" );
  $( ".icons-bars" ).css( "transition","color 500ms" );
         $( ".bgs-transparent " ).css( "background","rgba(255, 255, 255,0.95)" );
  $( ".bgs-transparent " ).css( "transition","background-color 500ms" );
      
       
    }
 
})