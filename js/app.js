//owl carosel js code start:
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 13,
    nav: true,
    responsive: {
      0: {
        items: 1,
      }
      ,
      320: {
        items: 2,
      },
      575: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
  //owl carosel js code end:
  console.log('File linked!')

  // payment method modal form submit modal code start
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('payment-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 
    });
});

// payment method modal form submit modal code end

// toggle menu javascript code for header code
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  menuButton.addEventListener('click', function() {
      // Toggle the visibility of the mobile menu
      if (mobileMenu.style.display === 'block') {
          mobileMenu.style.display = 'none';
      } else {
          mobileMenu.style.display = 'block';
      }
  });
});
