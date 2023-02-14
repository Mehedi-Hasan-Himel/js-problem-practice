const nayok = {
  name: `Sakib Khan`,
  id: 121,
  address: `movie cinema`,
  isSingle: true,
  friends: [`Apu`, `Raaz`, `Salman`, `aamir`],
  movies: [
    { name: `no 1`, year: 2015 },
    { name: `king khan`, year: 2018 },
  ],
  act: function () {
    console.log(`Acting Like Shakib Khan`);
  },
  car: {
    brand: `Tesla`,
    price: 500000,
    made: 2025,
    manuFacturer: {
      name: `tesla`,
      ceo: `Elon Musk`,
    },
  },
};

nayok.act(nayok.act);


