
$(window).on('load', function(){
    setTimeout(function() {
        $('.pre-loader').hide();
    }, 1000);    
});

$(document).ready(function() {
    //back to top
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 50) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }

        $('.nav-link').unbind('focus');
        $('.nav-link').bind('focus');
    });

    //Click event to scroll to top
    $('.scrollToTop').on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //Dropdown Menus
    $(".dropdown").hover(
        function() {
            $(this).addClass('show');
        },
        function() {
            $(this).removeClass('show');
        }
    );


    // Make a sticky navbar on scrolling
    $(window).scroll(function() {
        function makeItFixed(x) {

            var body = $('body'),
                navbar = $('nav.navbar');

            if ($(window).scrollTop() >= x) {
                navbar.addClass('fixed-top');
                body.css('padding-top', $('nav.navbar').outerHeight());
            } else {
                navbar.removeClass('fixed-top');
                body.css('padding-top', '0');
            }
        }

        makeItFixed($('.top-bar').outerHeight());
    });

});

    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.674, lng: -73.945},
          zoom: 12,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#2d3032'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#2d3032'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#ffffff'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffd525'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffd525'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffd525'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
    }
