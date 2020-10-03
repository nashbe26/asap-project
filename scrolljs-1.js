        $( ".icons-bars" ).css( "color","#01A89C" );

$( "body" ).scroll(function(e) {

    if ($("body").scrollTop()==0){
            $( "#title-text" ).css( "color","#01A89C" );
        $( ".icons-bars" ).css( "color","#01A89C" );
       
  $( ".bgs-transparent " ).css( "background","rgba(255, 255, 255, 0.95)" );
  $( ".bgs-transparent " ).css( "transition","background-color 500ms" );


    }else{
          $( "#title-text" ).css( "color","#01A89C" );
        $( ".icons-bars" ).css( "color","#01A89C" );
        $( "#title-text" ).css( "transition","color 500ms" );
        $( "#title-text" ).css( "transition","color 500ms" );
  $( ".icons-bars" ).css( "transition","color 500ms" );
         $( ".bgs-transparent " ).css( "background","rgba(255, 255, 255,0.95)" );
  $( ".bgs-transparent " ).css( "transition","background-color 500ms" );
      
       
    }
 
})