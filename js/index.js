
$(window).resize(function(){
if($(".navSlideBtn").is(':hidden')){
    $(".dropdownNav").css("display","none")
}
})

var checkNavStatus = false;
$(".navSlideBtn").click(function(){
    if(checkNavStatus==false){
        $(".dropdownNav").slideDown();
        checkNavStatus = true;
    }
    else {
        $(".dropdownNav").slideUp();
        checkNavStatus = false;
    }
});