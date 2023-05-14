export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow btn shorts-nav" +
      (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <svg role="img" viewBox="0 0 24 24">
      <path d="M8.775 3.225 0 12l8.775 8.775 1.498-1.407-6.421-6.267H24v-2.202H3.852l6.421-6.267-1.498-1.407Z" />
    </svg>
  </button>
);
export const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow btn shorts-nav" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <svg role="img" viewBox="0 0 24 24">
      <path d="M15.225 20.775 24 12l-8.775-8.775-1.498 1.407 6.421 6.267H0v2.202h20.148l-6.421 6.267 1.498 1.407Z" />
    </svg>
  </button>
);
export const slideStetting0 = {
  Infinity: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
export const slideStetting1 = {
  autoplay: true,
  autoplaySpeed: 7000,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};
export const slideStetting2 = {
  autoplay: true,
  centerMode: true,
  slidesToShow: 1,
  speed: 500,
}

export const breakpoints = {
  default: 5,
  1100: 3,
  700: 2,
};