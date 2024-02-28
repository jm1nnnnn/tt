// $(function(){
//     $('.slide_all').slick({
//         arrows:false,
//         autoplay:true,
//         adaptiveHeight:true,
//         slidesToShow:2,
//         Infinite:true,
//         responsive:[
//             {
//                 // 반응형잡을 시 사용
//                 breakpoint : 1200,
//                 settings:{
//                     slidesToShow:2,
//                     Infinite: true,
//                 }
//             },
//             {
//                 breakpoint : 767,
//                 settings:{
//                     slidesToShow:2,
//                 }
//             },
//             {
//                 breakpoint : 575,
//                 settings:{
//                     slidesToShow:1,
//                 }
//             }
//         ]
//     })
// /////////////////////    
// });

$(function(){

    // 주 메뉴가 오버 시 서브메뉴 개별적으로 나타나게

    $('.main_menu>li').on({
        mouseover:function(){
            $('.sub_menu>li',this).stop().slideDown();
        },
        mouseout:function(){
            $('.sub_menu>li',this).stop().slideUp();
        }
    }),

    // 모바일메뉴바 클릭 시 모바일 메뉴가 나타나게 
    $('.mobile_menuba').click(function(){
        $('.mobile_menu').css({
            left:'100%'
        },1000)
    });
    // 나가기 버튼 누를 시 모바일 메뉴 사라지게
    
/////////////////////
});