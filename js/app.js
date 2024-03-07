
  
$(function () {



      $('.b_allslide').slick({
        arrows:false,
        infinite: true,
        autoplay:true,
        autoplayspeed:1000,
        slidesToShow:1,
        slidesToScroll: 1
      });


    //   메인타이틀 무한슬라이드

    let slide = setInterval(function(){
        $('.slidebox').delay(1000).animate({
            marginLeft: '-10px'
        }, function(){
            $('.m_box').append($('.slidebox .m_box:first')).css({
                marginLeft: '-465px'
            });
        });
    }, 3000);


    // 섹션0번째 타이틀 슬라이드

    let title_slide = setInterval(function(){

        $('.s_wrap .slide_contents').delay(3000)

        $('.s_wrap .slide_contents').animate({marginLeft:'-1200px'},function(){
            $('.s_wrap .slide_contents').append($('.slide_contents .img_title:eq(0)')).css({
                marginLeft:'0'
            })
        })
    },5000);

    


    // 모바일 섹션 타이틀 슬라이드

    // let slide_mobile = setInterval(function(){
    //     $('.mob_box').delay(2500)

    //     $('.mob_box').animate({
    //         marginLeft:'-600px'
    //     },function(){
    //         $('.mob_box').append($('.mob_box .s_box:eq(0)')).css({marginLeft:'0'})
    //     })
    // },3000);

    // 주 메뉴가 오버 시 서브메뉴 개별적으로 나타나게

    $('.main_menu>li').on({
        mouseover: function () {
            $('.sub_menu>li', this).stop().slideDown();
        },
        mouseout: function () {
            $('.sub_menu>li', this).stop().slideUp();
        }
    });

    
    // 모바일메뉴바 클릭 시 모바일 메뉴가 나타나게 
    // $('.mobile_menuba').click(function () {
    //     $('.mobile_menu').css({
    //        display:'block'
    //     })
    // });

    $('.mobile_menuba').click(function () {
        $('.mobile_menu').css({
            right:'0'
        },2000)
    });
    
    // 나가기 버튼 누를 시 모바일 메뉴 사라지게
    $('.close').click(function () {
        $('.mobile_menu').css({
            right:'-100%'
        })
    })



    // month 월별 클릭 시 서브월별 나타나게
    $('.mob_b, .sub_btn').on({
        mouseover: function () {
            $('.sub_btn').stop().show();
        },
        mouseout: function () {
            $('.sub_btn').stop().hide();
        }
    })    

    // $('.mob_b').(
    //     function() {
    //       // 마우스가 올라갔을 때
    //       $('.box').find('.sub_btn>.box').show();
    //     },
    //     function() {
    //       // 마우스가 나갔을 때
    //       $('.box').find('.sub_btn>.box').hide();
    //     }
    //   );

    $('.m_btn').click(function() {
        // 현재 드롭다운의 서브메뉴 토글
        $(this).siblings('.sub_btn').toggle();
      });

      // 서브메뉴 항목 클릭 시 이벤트 핸들러
      $('.sub_btn>li').click(function() {
        // 클릭한 서브메뉴 항목의 부모 서브메뉴 숨김
        $(this).closest('.sub_btn').hide();
      });

    // 웹  월 별 버튼 클릭 시 이미지 뜨게

   $('.box:nth-child(1)').click(function(){
    $('.mi1').stop().fadeIn();
    $('.month_img').not('.mi1').fadeOut();
    $('.mi1').stop().fadeIn();
    $('.month_i').not('.mi1').fadeOut();
   })
   $('.box:nth-child(2)').click(function(){
    $('.mi2').stop().fadeIn();
    $('.month_img').not('.mi2').fadeOut();
    $('.mi2').stop().fadeIn();
    $('.month_i').not('.mi2').fadeOut();
   })
   $('.box:nth-child(3)').click(function(){
    $('.mi3').stop().fadeIn();
    $('.month_img').not('.mi3').fadeOut();
    $('.mi3').stop().fadeIn();
    $('.month_i').not('.mi3').fadeOut();
   })
   $('.box:nth-child(4)').click(function(){
    $('.mi4').stop().fadeIn();
    $('.month_img').not('.mi4').fadeOut();
    $('.mi4').stop().fadeIn();
    $('.month_i').not('.mi4').fadeOut();
   })
   $('.box:nth-child(5)').click(function(){
    $('.mi5').stop().fadeIn();
    $('.month_img').not('.mi5').fadeOut();
    $('.mi5').stop().fadeIn();
    $('.month_i').not('.mi5').fadeOut();
   })
   $('.box:nth-child(6)').click(function(){
    $('.mi6').stop().fadeIn();
    $('.month_img').not('.mi6').fadeOut();
    $('.mi6').stop().fadeIn();
    $('.month_i').not('.mi6').fadeOut();
   })
   $('.box:nth-child(7)').click(function(){
    $('.mi7').stop().fadeIn();
    $('.month_img').not('.mi7').fadeOut();
    $('.mi7').stop().fadeIn();
    $('.month_i').not('.mi7').fadeOut();
   })
   $('.box:nth-child(8)').click(function(){
    $('.mi8').stop().fadeIn();
    $('.month_img').not('.mi8').fadeOut();
    $('.mi8').stop().fadeIn();
    $('.month_i').not('.mi8').fadeOut();
   })
   $('.box:nth-child(9)').click(function(){
    $('.mi9').stop().fadeIn();
    $('.month_img').not('.mi9').fadeOut();
    $('.mi9').stop().fadeIn();
    $('.month_i').not('.mi9').fadeOut();
   })
   $('.box:nth-child(10)').click(function(){
    $('.mi10').stop().fadeIn();
    $('.month_img').not('.mi10').fadeOut();
    $('.mi10').stop().fadeIn();
    $('.month_i').not('.mi10').fadeOut();
   })
   $('.box:nth-child(11)').click(function(){
    $('.mi11').stop().fadeIn();
    $('.month_img').not('.mi11').fadeOut();
    $('.mi11').stop().fadeIn();
    $('.month_i').not('.mi11').fadeOut();
   })
   $('.box:nth-child(12)').click(function(){
    $('.mi12').stop().fadeIn();
    $('.month_img').not('.mi12').fadeOut();
    $('.mi12').stop().fadeIn();
    $('.month_i').not('.mi12').fadeOut();
   })


//    모바일 월 별로 클릭 시 이미지 뜨게

$('.box:nth-child(1)').click(function(){
    $('.mi1').stop().fadeIn();
    $('.month_img').not('.mi1').fadeOut();
   })
   $('.box:nth-child(2)').click(function(){
    $('.mi2').stop().fadeIn();
    $('.month_img').not('.mi2').fadeOut();
   })
   $('.box:nth-child(3)').click(function(){
    $('.mi3').stop().fadeIn();
    $('.month_img').not('.mi3').fadeOut();
   })
   $('.box:nth-child(4)').click(function(){
    $('.mi4').stop().fadeIn();
    $('.month_img').not('.mi4').fadeOut();
   })
   $('.box:nth-child(5)').click(function(){
    $('.mi5').stop().fadeIn();
    $('.month_img').not('.mi5').fadeOut();
   })
   $('.box:nth-child(6)').click(function(){
    $('.mi6').stop().fadeIn();
    $('.month_img').not('.mi6').fadeOut();
   })
   $('.box:nth-child(7)').click(function(){
    $('.mi7').stop().fadeIn();
    $('.month_img').not('.mi7').fadeOut();
   })
   $('.box:nth-child(8)').click(function(){
    $('.mi8').stop().fadeIn();
    $('.month_img').not('.mi8').fadeOut();
   })
   $('.box:nth-child(9)').click(function(){
    $('.mi9').stop().fadeIn();
    $('.month_img').not('.mi9').fadeOut();
   })
   $('.box:nth-child(10)').click(function(){
    $('.mi10').stop().fadeIn();
    $('.month_img').not('.mi10').fadeOut();
   })
   $('.box:nth-child(11)').click(function(){
    $('.mi11').stop().fadeIn();
    $('.month_img').not('.mi11').fadeOut();
   })
   $('.box:nth-child(12)').click(function(){
    $('.mi12').stop().fadeIn();
    $('.month_img').not('.mi12').fadeOut();
   })


    //  모바일 section05 할인특가
    $('.m_sbox').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
              breakpoint: 525,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
      })
      



    /////////////////////
});

