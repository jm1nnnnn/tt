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

$(function () {

    // 주 메뉴가 오버 시 서브메뉴 개별적으로 나타나게

    $('.main_menu>li').on({
        mouseover: function () {
            $('.sub_menu>li', this).stop().slideDown();
        },
        mouseout: function () {
            $('.sub_menu>li', this).stop().slideUp();
        }
    }),

        // 모바일메뉴바 클릭 시 모바일 메뉴가 나타나게 
        $('.menuba').click(function () {
            $('.mobile_menu').css({
                left: '0%'
            }, 10000)
        });
    // 나가기 버튼 누를 시 모바일 메뉴 사라지게
    $('.close').click(function () {
        $('.mobile_menu').css({
            left: '100%'
        }, 10000)
    })


    // month 월별 클릭 시 서브월별 나타나게
    $('.m_btn a, .sub_btn').on({
        mouseover: function () {
            $('.sub_btn').stop().slideDown();
        },
        mouseout: function () {
            $('.sub_btn').stop().slideUp();
        }
    })



    // slick


    /////////////////////
});

document.addEventListener('DOMContentLoaded', () => {
    const month = document.querySelector('.month')
    const m_btn = document.querySelector('.sub_btn')

    function monthbox(months) {
        let monthlist = months.map((item) => {
            return
            `<div class="month">
                        <figure class="month_img">
                            <img src="${item.img}" alt="${item.title}">
                        </figure>
        </div>`
        });
    }
    ///////////////    
})