var $albumTabs = $('.albumTab');
var $albumCover = $('.albumCover');
var $albumContents = $('.album');
var $home = $('.home');
var $img = $('.alb-img');


$albumTabs.on('click', function(e){
  e.preventDefault();
  var $albumContents = $('.album');
  $albumContents.removeClass('selected');
  var albumId = $(e.target).closest('a').attr('href');
  $(albumId).addClass('selected');

  $albumCover.addClass('hidden');
})

$home.on('click', function(e) {
  e.preventDefault();
  $albumContents.removeClass('selected');
  $albumCover.removeClass('hidden');
})

$img.on('click', function(e){
  console.dir(e.target);
  console.log(e.currentTarget);
  var currentImage = $(e.currentTarget);
  if (currentImage.hasClass('large')) {
    currentImage.removeClass('large');
    $albumTabs.removeClass('hidden');
    $home.removeClass('hidden');
    // $albumContents.removeClass('hidden');
   }
  else {
    $(currentImage).addClass('large');
    $albumTabs.addClass('hidden');
    $home.addClass('hidden');
    console.log($img);
    // $img.forEach(function(img){
    //   if (!img.hasClass('large')) {
    //     $img.addClass('hidden');
    //   }
    // })
  }
})
