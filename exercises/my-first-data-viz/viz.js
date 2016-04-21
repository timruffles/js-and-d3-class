var data = [
  { year: 1999,  poolDeaths: 109 , cageFilms: 2 },
  { year: 2000,  poolDeaths: 102 , cageFilms: 2 },
  { year: 2001,  poolDeaths: 102 , cageFilms: 2 },
  { year: 2002,  poolDeaths: 98  , cageFilms: 3 },
  { year: 2003,  poolDeaths: 85  , cageFilms: 1 },
  { year: 2004,  poolDeaths: 95  , cageFilms: 1 },
  { year: 2005,  poolDeaths: 96  , cageFilms: 2 },
  { year: 2006,  poolDeaths: 98  , cageFilms: 3 },
  { year: 2007,  poolDeaths: 123 , cageFilms: 4 },
  { year: 2008,  poolDeaths: 94  , cageFilms: 1 },
  { year: 2009,  poolDeaths: 102 , cageFilms: 4 },
];


// TODO select groups (.film), bind data

// TODO configure the films .transform attribute
  //  - each group's x is 80px to right of previous
  //  - each group's y is (200 - (d.cageFilms * 20 + 20)) px

  // end up with string like: translate(10px, 20px)

// TODO make each circle's radius (poolDeaths / 4) pixels
// CSS units always have a unit - visual unit, e.g em, ex, px, pt
// SVG units in SVG attributes - unitless


// TODO set each <text>'s content to d.year
