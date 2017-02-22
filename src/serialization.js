const people = {
  johnSmith: {
    firstName: 'john',
    lastName: 'smith',
    personalInfo: {
      age: 20
    },
    cities: [
      'New York',
      'Boston'
    ]
  },
  elizabethComstock: {
    firstName: 'elizabeth',
    lastName: 'comstock',
    personalInfo: {
      age: 66
    },
    cities: [
      'Columbia',
      'Rapture'
    ]
  }
};

const payload = {
  data: [
    {
      type: 'Car',
      id: 1,
      attrs: {
        color: 'red',
        year: 2000,
        price: 10000
      },
      owners: [
        people.johnSmith
      ]
    },
    {
      type: 'Car',
      id: 3,
      attrs: {
        color: 'yellow',
        year: 2010,
        price: 9000
      },
      owners: [
        people.elizabethComstock
      ]
    },
    {
      type: 'Car',
      id: 6,
      attrs: {
        color: 'yellow',
        year: 2011,
        price: 8000
      },
      owners: []
    },
    {
      type: 'Car',
      id: 4,
      attrs: {
        color: 'yellow',
        year: 2013,
        price: 14000
      },
      owners: [
        people.elizabethComstock,
        people.johnSmith
      ]
    },
    {
      type: 'Bicycle',
      id: 2,
      attrs: {
        color: 'green',
        year: 2002,
        price: 800
      },
      owners: [
        people.elizabethComstock
      ]
    },
    {
      type: 'Gun',
      id: 4,
      attrs: {
        color: 'black',
        year: 2012,
        price: 1000
      },
      owners: [
        people.elizabethComstock,
        people.johnSmith
      ]
    }
  ]
};

export {payload, people};
