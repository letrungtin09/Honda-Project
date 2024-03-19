$('#vehicle-list').mCustomScrollbar({
    theme: 'dark'
});

function move(value){
    $('#vehicle-list').mCustomScrollbar("scrollTo", value, {
        scrollEasing: 'easeOut',
    });
}

$('.vehicle-nav ul li a').click(function(){
    if($(this).attr('id') === "cars-nav"){
        move("#cars");
    }
    if($(this).attr('id') === "suvs-nav"){
        move("#suvs");
    }
    if($(this).attr('id') === "minivan-nav"){
        move("#minivan");
    }
    if($(this).attr('id') === "environmental-nav"){
        move("#environmental");
    }
    if($(this).attr('id') === "future-nav"){
        move("#future");
    }
});

var count = "";
$('#navbar > a').click(function(){
    if(count === ""){
        count = $(this).attr('id');
        $(this).addClass('active');
        if(count === "vehicle-link"){
            $("#vehicles").removeClass('hide-vehicle');
            $('.vehicle-nav').addClass('animate__fadeInDown');
            $('#vehicle-list').addClass('animate__fadeInUp');
        }
    }
    else{
        if(count === $(this).attr('id')){
            $(this).removeClass('active');
            count = "";
            $('.vehicle-nav').addClass('animate__fadeOutUp');
            $('#vehicle-list').addClass('animate__fadeOutDown');
            setTimeout(function(){
                $("#vehicles").addClass('hide-vehicle');
                $('.vehicle-nav').removeClass('animate__fadeOutUp');
                $('#vehicle-list').removeClass('animate__fadeOutDown');
            },300);
        }
        else{
            $('#navbar > a').removeClass('active');
            $(this).addClass('active');
            count = $(this).attr('id');
            if(count != "vehicle-link"){
                $('.vehicle-nav').addClass('animate__fadeOutUp');
                $('#vehicle-list').addClass('animate__fadeOutDown');
                setTimeout(function(){
                    $("#vehicles").addClass('hide-vehicle');
                    $('.vehicle-nav').removeClass('animate__fadeOutUp');
                    $('#vehicle-list').removeClass('animate__fadeOutDown');
                },300);
            }
            else{
                $("#vehicles").removeClass('hide-vehicle');
                $('.vehicle-nav').addClass('animate__fadeInDown');
                $('#vehicle-list').addClass('animate__fadeInUp');
            }
        }
    }
});

$('#vehicle-close').click(function(){
    $('.vehicle-nav').addClass('animate__fadeOutUp');
    $('#vehicle-list').addClass('animate__fadeOutDown');
    setTimeout(function(){
        $("#vehicles").addClass('hide-vehicle');
        $('.vehicle-nav').removeClass('animate__fadeOutUp');
        $('#vehicle-list').removeClass('animate__fadeOutDown');
    },300);
    $('#navbar a').removeClass('active');
    count = "";
});

$('.vehicle-product').addClass('animate__animated animate__fadeInUp');

//vehicle-nav active
var carNav = document.getElementById("carNav");
var listNav = carNav.getElementsByTagName("li");
for (var i = 0; i < listNav.length; i++) {
    listNav[i].addEventListener("click", function (){
        var current = document.querySelector("#carNav .active");
        current.className = current.className.replace("active", "");
        // Cộng thêm class active cho thẻ li được click
        this.className += "active";
    });
}

//owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})