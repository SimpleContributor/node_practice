const { fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math');

test('Should convert 32 F to 0 C', () => {
    let tempC = fahrenheitToCelsius(32);
    expect(tempC).toBe(0);
});

test('Should convert 0 C to 32 F', () => {
    let tempF = celsiusToFahrenheit(0);
    expect(tempF).toBe(32);
});

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2);
//         done();
//     }, 2000)
// })

test('Should add two numbers', (done) => {
    add(2, 3).then((sum) => {
        expect(sum).toBe(5);
        done();
    })
})

test('Should add two numbers async/await', async () => {
    const sum = await add(10, 22);
    expect(sum).toBe(32);
})
