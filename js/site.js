// (function($) {
//
//
//   $(document).ready(function (){
//
//     // create a LatLng object containing the coordinate for the center of the map
//     var latlng = new google.maps.LatLng(27.9473,-82.460);
//
//     // prepare the map properties
//     var options = {
//       zoom: 15,
//       center: latlng,
//       mapTypeId: google.maps.MapTypeId.ROADMAP,
//       navigationControl: true,
//       mapTypeControl: false,
//       scrollwheel: false,
//       disableDoubleClickZoom: true
//     };
//
//     // initialize the map object
//     var map = new google.maps.Map(document.getElementById('google-map'), options);
//
//     // add Marker
//     var marker1 = new google.maps.Marker({
//       position: latlng, map: map
//     });
//
//     // add listener for a click on the pin
//     google.maps.event.addListener(marker1, 'click', function() {
//       infowindow.open(map, marker1);
//     });
//
//     // add information window
//     // var infowindow = new google.maps.InfoWindow({
//     //   content:  '<div class="info"><strong>traversoft <strong></div>'
//     // });
//
//                 // if ($(window).width() > 767) {
//                 //     var googleMaps = 'index',
//                 //         eventPlace = new google.maps.LatLng({{ site.data.location.eventPlaceCoordinates | replace:' ','' }}),
//                 //         centerMap = new google.maps.LatLng({{ site.data.location.mapCenterCoordinates | replace:' ','' }}),
//                 //         mobileCenterMap = new google.maps.LatLng({{ site.data.location.mapMobileCenterCoordinates | replace:' ','' }}),
//                 //         icon = '{{ site.baseurl }}/img/other/map-marker.svg';
//                 // } else {
//                 //    var staticGoogleMaps = true,
//                 //     eventPlaceCoordinates = '{{ site.data.location.eventPlaceCoordinates | replace:' ','' }}',
//                 //     centerMapCoordinates = '{{ site.data.location.mapCenterCoordinates | replace:' ','' }}',
//                 //     mobileCenterMapCoordinates = '{{ site.data.location.mapMobileCenterCoordinates | replace:' ','' }}',
//                 //     icon = '{{ site.baseurl | prepend: site.url }}/img/other/map-marker.png';
//                 // }
//     // Google maps static
//     // if (typeof staticGoogleMaps !== 'undefined') {
//         // $('#canvas-map').addClass('image-section').css('background-image','url(https://maps.googleapis.com/maps/api/staticmap?zoom=17&center=' + mobileCenterMapCoordinates +'&size=' + $(window).width() + 'x700&scale=2&language=en&markers=icon:' + icon +'|'+ eventPlaceCoordinates +'&maptype=roadmap&style=visibility:on|lightness:40|gamma:1.1|weight:0.9&style=element:labels|visibility:off&style=feature:water|hue:0x0066ff&style=feature:road|visibility:on&style=feature:road|element:labels|saturation:-30)');
//     // }
//   });
// })(jQuery);
