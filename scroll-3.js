function openNav() {
     $('#phone-name').removeAttr('class')
  document.getElementById("mySidebar").style.height = "80%";
  document.getElementById("mySidebar").style.paddingTop = "60px";
  $('header').not("#mySidebar").css("filter","blur(8px)");
  $('section').css("filter","blur(8px)");
  document.getElementById("mySidebar").style.transition=('height 1s');
  document.getElementById("mySidebar").style.paddingTop = "60px";
 
}

function closeNav() {
    document.getElementById("mySidebar").style.height = "0";
    document.getElementById("mySidebar").style.paddingTop = "0px";
    $('header').not("#mySidebar").css("filter","none");
   
    $('section').css("filter","none");
    if( document.getElementById("mySidebar").style.height==0){
          $('#phone-name').attr('class','sticky-top')
    }
  

}
    function openNavIphone() {
        $('#title-text').delay(200).fadeOut()
        document.getElementById("SidebarIphone").style.height = "60%";
        document.getElementById("SidebarIphone").style.transition=('height 1s');
        $('header').not("#mySidebar").css("filter","blur(8px)");
        $('section').css("filter","blur(8px)");
        
}


function closeNavIphone() {
      document.getElementById("SidebarIphone").style.height = "0px";
     
       $('header').not("#mySidebar").css("filter","none");
  
         $('section').css("filter","none");
       
              $('#title-text').delay(500).fadeIn()

        
      

}
    function openNavAcc() {
        document.getElementById("SidebarAcc").style.height = "20%";
      document.getElementById("SidebarAcc").style.transition=('height 1s');
        $('header').not("#mySidebar").css("filter","blur(8px)");
        $('section').css("filter","blur(8px)");
       
          }




function closeNavAcc() {
   document.getElementById("SidebarAcc").style.height = "0";
    
       $('header').not("#mySidebar").css("filter","none");
  
         $('section').css("filter","none");

}
/*------------------------scroll--------------------*/
 
      Aacessórios =  $('.Aacessórios');
      $(Aacessórios).click(  function(){
           var valid=true;
            container =  $('#SidebarAcc');
           document.onclick=function ( e ) {
        
         
               if (Aacessórios.is(e.target))
           {
               $('#phone-name').removeAttr('class')
              openNavAcc()
               valid=true;
              
            }else if(valid){
                if (!container.is(e.target)){
                     $('#phone-name').attr('class','sticky-top')
                         closeNavAcc()
                 valid=false;
               return false;
            }}
           }
    })
  iPhones =  $('.iPhones');
 
   

$(iPhones).click(  function(){  
            var valid=true
            container1 =  $('#SidebarIphone');
            $('body ').click(function (e){

            if (iPhones.is(e.target))
         {
              $('#phone-name').removeAttr('class')
              openNavIphone();
              
              valid=true;
           
         }else if(valid){
             if (!$(e.target).closest("#SidebarIphone").length ){
              $('#phone-name').attr('class','sticky-top')
               closeNavIphone();
               valid=false;
               return false;
            
             }
              
             
         }})})


    
    
    
 burger=$('.burger-icon')
burger.click(  function(){  
            var valid=true
            container1 =  $('#mySidebar');
            $('body ').click(function (e){

            if (burger.is(e.target))
         {
              openNav();
             
              valid=true;
           
           
         }else if(valid){
  
             if (!$(e.target).closest("#mySidebar").length ){
               
               closeNav();
               valid=false;
               return false;
            
             }
              
             
         }})})