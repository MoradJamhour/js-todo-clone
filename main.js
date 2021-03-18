
$(document).ready(function(){

  $('#button').click(function(){
      var imput = $('input[name=ListItem]').val();
      $('ul').append('<li>' + imput + '</li>');
  });

    $('input[name=ListItem]').keypress(function(e){
      var imput = $('input[name=ListItem]').val();
      if(e.which == 13 || e.keyCode == 13){
        $('ul').append('<li>' + imput + '</li>');
      }
    });

    $(document).on('click','li', function(){
      $(this).toggleClass('strike').fadeOut('slow');
    });

});
