/**
 * Image Cropper.
 */
(function($) {
  Drupal.behaviors.image_resizer = {
    attach: function (context, settings) {
      $(".image_generations").height(400);
      $(".image_generations").width(600);

      // First
      $(".image_generations").image_wrapper(300, 200, settings);
    }
  }

  $.fn.image_wrapper = function($width = 0, $height = 0, settings) {
    $(this).prepend('<div class="action-wrapper"><div class="generator button"><a class="image-generator" href="/image-resizer">Generate</a></div><div class="download button" id="ajax-target">Download</div></div>');
    $("#ajax-target").hide();
    $w = $width;
    $h = $height;

    $basic = $(this).croppie({
      // update: function() {
      //   if(counter==0)
      //    $(this).croppie('setZoom', '0');
      //   counter++;
      // }
      viewport: {
        width: $width,
        height: $height
      },
      boundary: {
        width: $width + 300,
        height: $height + 200
      },
    });

    if (typeof settings.image_resizer != 'undefined') {
      $basic.croppie('bind', {
        url: settings.image_resizer.img,
        points: [0,0,0,0],
      });
    }

    $(this).find(".image-generator").on("click", function(e){
    $(this).parents(".generator").find("#ajax-target").hide();
      e.preventDefault();
      $attributes = {};
      // Inserting Fid
      console.log(Number($basic.croppie('get').points[0]) + 2);
      console.log($basic.croppie('get'));
      $attributes['fid'] = settings.image_resizer.fid;
      $attributes['x'] = Number($basic.croppie('get').points[0]) + Number(2);
      $attributes['y'] = Number($basic.croppie('get').points[1]) + Number(2);
      $attributes['o_width'] = $w;
      $attributes['o_height'] = $h;
      $attributes['width'] = Number($w / $basic.croppie('get').zoom);
      $attributes['height'] = Number($h / $basic.croppie('get').zoom);

      // if ($basic.croppie('get').zoom > 1) {
      // }

      // if ($basic.croppie('get').zoom <= 1) {
      //   $attributes['width'] = $w / $basic.croppie('get').zoom;
      //   $attributes['height'] = $h / $basic.croppie('get').zoom;
      // }

      // Activate Download
      $(this).parent('.generator').siblings("#ajax-target").show().load("/image-resizer/download?&fid=" + $attributes['fid'] + "&x=" + $attributes['x'] + "&y=" + $attributes['y'] + "&width=" + $attributes['width'] + "&height=" + $attributes['height'] + "&o_width=" + $attributes['o_width'] + "&o_height=" + $attributes['o_height'] );
    });
  }
})(jQuery);

