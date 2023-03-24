function initListeners(){
    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
        $(".heroMobile").toggleClass("active");
    })

    $(".links a").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
        
    })
    
}


$(document).ready(function (){
    initListeners();
})