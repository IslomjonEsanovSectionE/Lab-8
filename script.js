$(document).ready(function () {
      $('.tv-girl').click(function () {
      let imgSrc = $(this).find('img').attr('src');
      $('#modal-img').attr('src', imgSrc);
      $('#modal-container').fadeIn();
      
    });

    $('.alexg').click(function () {
        let imgSrc = $(this).find('img').attr('src');
        $('#modal-img').attr('src', imgSrc);
        $('#modal-container').fadeIn();
        
    });

    $('.pixies').click(function () {
        let imgSrc = $(this).find('img').attr('src');
        $('#modal-img').attr('src', imgSrc);
        $('#modal-container').fadeIn();
        
    });

    $('.arctic-monkeys').click(function () {
        let imgSrc = $(this).find('img').attr('src');
        $('#modal-img').attr('src', imgSrc);
        $('#modal-container').fadeIn();
        
    });
  
    $('#modal-container').click(function () {
      $(this).fadeOut();
    });


    $('#tv-girl').change(function() {
        if($(this).is(':checked')) {
            $('.alexg').hide();
            $('.pixies').hide();
            $('.arctic-monkeys').hide();
        } else {
            $('.alexg').show();
            $('.pixies').show();
            $('.arctic-monkeys').show();;
        }
    })
    $('#alexg').change(function() {
        if($(this).is(':checked')) {
            $('.tv-girl').hide();
            $('.pixies').hide();
            $('.arctic-monkeys').hide();
        } else {
            $('.tv-girl').show();
            $('.pixies').show();
            $('.arctic-monkeys').show();;
        }
    })
    $('#pixies').change(function() {
        if($(this).is(':checked')) {
            $('.alexg').hide();
            $('.tv-girl').hide();
            $('.arctic-monkeys').hide();
        } else {
            $('.alexg').show();
            $('.tv-girl').show();
            $('.arctic-monkeys').show();;
        }
    })
    $('#arctic-monkeys').change(function() {
        if($(this).is(':checked')) {
            $('.alexg').hide();
            $('.pixies').hide();
            $('.tv-girl').hide();
        } else {
            $('.alexg').show();
            $('.pixies').show();
            $('.tv-girl').show();;
        }
    })

});