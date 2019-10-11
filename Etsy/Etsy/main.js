var hero = $('#hero');

function search (searchItem) {
  hero.html('');
  hero.append('<div class="loading">…</div>');
  var dataSet = {
    	type: 'GET',
    	url: "https://api.etsy.com/v2/listings/active.js?api_key=t54crgosiiuflej49bhdyn3i&keywords="+ searchItem +"&includes=Images,Shop",
    	dataType: 'jsonp',
      success: function(data, status, xhr) {
        hero.html('');
      // image, title, shop, price
           data.results.map(function(items, index, array){
             var div = $('<div class="items"></div>');
             var image = $('<img class="images" src=' + items.Images[0].url_fullxfull + '>');
             var title = $('<div class="title">' + items.title + '</div>');
             var shop = $('<span class="shop">' + items.Shop.shop_name + '</span>');
             var price = $('<span class="price">$'+ items.price + '</span>');
             div.append(image, title, shop, price);
             hero.append(div);
           })
        }
    };
    $.ajax(dataSet);
}

$('.searchButton').on('click', function(e) {
    var searchItem = $('.searchEngine').val();
    search(searchItem);
});
