

const splide = new Splide( '#splide1', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    isClone: true,
    pagination:false,
    gap:20,
    arrows: false,
    perPage: 4,
    autoScroll: {
      autoStart: true,
      speed: 0.5,
    },

    breakpoints: {
      1280: { 
        perPage: 3, 
      },

      1023 :{
        
        perPage: 2, 
      },

      767:{
        drag: 'false',
        perPage: 1, 
        pagination: true,
        autoScroll:false,
        padding: '1.8rem',
      }
    },
  } );
  
  splide.mount(window.splide.Extensions);

  const splideTwo = new Splide( '#splide2', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    pagination:false,
    gap:20,                                                                                                   
    arrows: false,
    //direction: 'rtl',
    perPage: 4,
    autoScroll: {
      autoStart: true,
      speed: -0.5,
    },

    breakpoints: {
      1280: { 
        perPage: 3, 
      },

      1023 :{
        perPage: 2, 
      },

      767:{
        perPage: 1, 
      }
    },
  } );
  
  splideTwo.mount(window.splide.Extensions);
  

  const links = document.querySelectorAll('.mobile-overlay__link');
    const mobileOverlay = document.getElementById('mobileOverlay');

    links.forEach(link => {
        link.addEventListener('click', () => {
            mobileOverlay.close(); // Закрыть модальное окно
        });
    });