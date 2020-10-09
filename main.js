$(document).ready(function (){
  $('#button-create-item').on('click', function (){
    let name = $('#input-create-item').val();
    $('#input-create-item').val('');

    let html  = '';
    html += '<div class="item">';
    html += '<div class="name">' + name + '</div>';
    html += '<img src="nyc.jpg"></img>';
    html += '<div class="description">One of those busy cities</div>';
    html += '<div class="price">500</div>';
    html += '<button class="item-add">Add to cart</button>';
    html += '<button class="item-remove">Remove</button>';
    html += '<br>';
    html += '<a  class="more-info-link" href="#">More info</a>';
    html += '<div class="more-info">Still one of those busy cities</div>';
    html += '</div>';

    $('#container').prepend(html);
  });

  $('#container').on('click','.more-info-link',function(event){
    event.preventDefault();


    $(this).parent().find('.more-info').slideToggle(1000);

  });

    $('#container').on('click', '.item-remove', function(){
      $(this).parent().remove();
    });

    $.ajax('item.json', function(response){});

});
