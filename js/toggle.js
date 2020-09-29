$(function(){
  $('.top-left--nav').click(function(){
    $('.list-info').slideToggle(200);
  });
});

$(function(){
  $('.search-icon').click(function(){
    $('.main-search--menu').slideDown(200);
    $('.search-icon').addClass('search-none');  
    // $('.search-icon-up').style.display = 'block';
    $('.search-icon-up').addClass('block');
  });
});

$(function(){
  $('.search-icon-up').click(function(){
    $('.main-search--menu').slideUp(200);
    $('.search-icon').removeClass('search-none');  
    // $('.search-icon-up').style.display = 'block';
    $('.search-icon-up').removeClass('block');
  });
});


$(function(){
  $('.category-toggle').click(function(){
    $('.menu-dropdow').slideToggle(200);
  });
});


$(function () {
  $('.menu-item').click(function () {
      if ($(this).hasClass('active')) {
          $(this).children('.menu-list').slideUp(200);
          $('.menu-item').removeClass('active');
      }
      else {
          $('.menu-list').slideUp(200);
          $(this).children('.menu-list').slideDown(200);
          $('.menu-item').removeClass('active');
          $(this).addClass('active');

      }
  })
});