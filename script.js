$(document).ready(function () {
      $('.tv-girl').click(function () {
      let imgSrc = $(this).find('img').attr('src');
      $('#modal-img').attr('src', imgSrc);
      $('#modal-container').fadeIn();
    });
  
    $('#modal-container').click(function () {
      $(this).fadeOut();
    });
  });