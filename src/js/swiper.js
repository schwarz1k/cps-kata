function swiperBrandsInit () {
  new Swiper('.brands__container', {
    cssMode: 'true',
    pagination: {
      el: '.brands__pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        enabled: true,
        slidesPerView: 1.15,
        spaceBetween: 16,
      },
      768: {
        enabled: false,
        slidesPerView: 'auto',
        spaceBetween: 'auto',
      }
    }
  });
}

function swiperTechInit () {
  new Swiper('.tech__container', {
    cssMode: 'true',
    pagination: {
      el: '.tech__pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        enabled: true,
        slidesPerView: 1.15,
        spaceBetween: 16,
      },
      768: {
        enabled: false,
        slidesPerView: 'auto',
        spaceBetween: 'auto',
      }
    }
  });
}

function swiperPriceInit () {
  new Swiper('.price__container', {
    cssMode: 'true',
    pagination: {
      el: '.price__pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        enabled: true,
        slidesPerView: 1.15,
        spaceBetween: 16,
      },
      768: {
        enabled: false,
        slidesPerView: 'auto',
        spaceBetween: 'auto',
      }
    }
  });
}

swiperBrandsInit();
swiperTechInit();
swiperPriceInit();

