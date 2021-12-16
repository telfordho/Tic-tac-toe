const state = {
    name: 'John',
    address: {
        city: 'London',
        country: {
            countryName: 'United Kingdom',
            countryCode: 'UK',
        },
    },
};

const nothi = { ...state };
console.log(nothi)