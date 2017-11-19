// /**
//  * Image Cropper.
//  */
(function($) {
  Drupal.behaviors.image_resizer = {
    attach: function (context, settings) {
      $img = Drupal.settings.image_resizer.img;
      $(".image-resizer-wrap").once("ele", function(){
        $('<div class="resizer-first-container image-resizer-wrapper"><div class="info"><p>1503 x 408</p></div><div class="component"><div class="overlay"><div class="overlay-inner"></div></div><img class="resize-image one" src="'+ $img +'" alt="Image" /></div><button class="btn-crop js-crop">Crop<img class="icon-crop" src="img/crop.svg"></button></div>').appendTo($(this));
        $('<div class="resizer-second-container image-resizer-wrapper"><div class="info"><p>800 x 516</p></div><div class="component"><div class="overlay"><div class="overlay-inner"></div></div><img class="resize-image two" src="'+ $img +'" alt="Image" /></div><button class="btn-crop js-crop">Crop<img class="icon-crop" src="img/crop.svg"></button></div>').appendTo($(this));
        $('<div class="resizer-third-container image-resizer-wrapper"><div class="info"><p>1200 x 630</p></div><div class="component"><div class="overlay"><div class="overlay-inner"></div></div><img class="resize-image three" src="'+ $img +'" alt="Image" /></div><button class="btn-crop js-crop">Crop<img class="icon-crop" src="img/crop.svg"></button></div>').appendTo($(this));
        $('<div class="resizer-fourth-container image-resizer-wrapper"><div class="info"><p>1120 x 600</p></div><div class="component"><div class="overlay"><div class="overlay-inner"></div></div><img class="resize-image four" src="'+ $img +'" alt="Image" /></div><button class="btn-crop js-crop">Crop<img class="icon-crop" src="img/crop.svg"></button></div>').appendTo($(this));
      });

//       // First
//       $(".resizer-first-container").image_wrapper(1503, 408, settings, 'Profile Banner');
//       $(".resizer-second-container").image_wrapper(800, 516, settings, 'Large Thumbnail');
//       $(".resizer-third-container").image_wrapper(1200, 630, settings, 'Facebook Event');
//       $(".resizer-fourth-container").image_wrapper(1120, 600, settings, 'Twitter Event');
//     }
//   }

//   $.fn.image_wrapper = function($width = 0, $height = 0, settings, name='') {
//     $(this).prepend('<div class="action-wrapper"><div class="details"><p>'+name+'</p>&nbsp;<p>'+$width+' x '+$height+'</div><div class="generator button"><a class="image-generator" href="/image-resizer">Generate</a></div><div class="download button" id="ajax-target">Download</div></div>');
//     $(".download").hide();

//     var cutter = 3;
//     var width = 0;
//     var height = 0;
//     width = $width/cutter;
//     height = $height/cutter;
//     var $basic = {};
//     $basic = $(this).croppie({
//       viewport: {
//         width: width,
//         height: height
//       },
//       boundary: {
//         width: 600,
//         height: 400
//       },
//     });

//     if (typeof settings.image_resizer != 'undefined') {
//       $basic.croppie('bind', {
//         url: settings.image_resizer.img,
//         points: [0,0,0,0],
//       });

//       $basic.croppie('setZoom', "2");
//     }

//     $(this).find(".image-generator").on("click", function(e){
//       $(this).closest(".image-resizer-wrapper").append('<div class="load"></div>');
//       $(this).parent('.generator').siblings(".download").hide();
//       e.preventDefault();
//       $attributes = {};
//       // Inserting Fid
//       $attributes['fid'] = settings.image_resizer.fid;
//       $attributes['x'] = Number($basic.croppie('get').points[0]) + Number(2);
//       $attributes['y'] = Number($basic.croppie('get').points[1]) + Number(2);
//       $attributes['o_width'] = width * cutter;
//       $attributes['o_height'] = height * cutter;
//       $attributes['width'] = Number(width / $basic.croppie('get').zoom);
//       $attributes['height'] = Number(height / $basic.croppie('get').zoom);

//       // Activate Download
//       $(this).parent('.generator').siblings("#ajax-target").load("/image-resizer/download?&fid=" + $attributes['fid'] + "&x=" + $attributes['x'] + "&y=" + $attributes['y'] + "&width=" + $attributes['width'] + "&height=" + $attributes['height'] + "&o_width=" + $attributes['o_width'] + "&o_height=" + $attributes['o_height'], function(){
//         $(this).show();
//         $(this).closest(".image-resizer-wrapper").find(".load").remove();
//       });
//
      // Kick everything off with the target image
      // resizeableImage($('.resize-image'));
    }
  }
})(jQuery);
