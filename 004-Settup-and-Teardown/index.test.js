let cities = [];

// function initializeCityDatabase() {
//     cities.push('Vienna')
//     cities.push('San Juan')
// }

function initializeCityDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cities.push('Vienna');
            cities.push('San Juan');
            resolve();
        }, 100);
    })
}

// function clearCityDatabase() {
//     cities = []
// }

function clearCityDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cities = [];
            resolve();
        }, 100);
    }, 100);
}

async function isCity(name) {
    return await cities.includes(name);
}


beforeEach(() => {
    initializeCityDatabase();
});

afterEach(() => {
    clearCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});

test('has 2 cities', () => {
    expect(cities.length).toEqual(2);
})

//https://www.youtube.com/watch?v=wWx9uZa-Wnk&list=PLrZyA4KBTQriFZkYhvhy1KFM21-l7VyL-&index=5
//05:48min