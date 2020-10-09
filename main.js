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
    html += '<button>Add to cart</button>';
    html += '<br>';
    html += '<a href="#">More info</a>';
    html += '<div class="more-info">Still one of those busy cities</div>';
    html += '</div>';

    $('#container').prepend(html);
  });
});
