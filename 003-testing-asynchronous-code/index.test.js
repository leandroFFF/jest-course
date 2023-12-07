//============================Promises===================================
function fetchData() {
    return Promise.resolve('peanut butter');
}
//module.exports = { fetchData };

test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });

//============================Async/Await===================================
test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});

//Você pode combinar async e await com .resolves ou .rejects
test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    // await expect(fetchData()).rejects.toMatch('error');
    await expect(fetchData()).rejects.toMatch('peanut butter');
});

//============================Callbacks===================================

