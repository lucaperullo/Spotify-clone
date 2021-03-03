new Splide("#splide", {
  perPage: 3,
  breakpoints: {
    1000: {
      perPage: 1,
    },
  },
  padding: {
    right: "5rem",
    left: "5rem",
  },
}).mount();
