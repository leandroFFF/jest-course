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
    //expect.assertions(1);
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

// test('the fetch fails with an error', async () => {
//     await expect(fetchData()).rejects.toMatch('error');
// });

//============================Callbacks===================================
// Não faça isso!
test('the data is peanut butter', () => {
  function callback(error, data) {
    if (error) {
      throw error;
    }
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});

//============================.resolves / .rejects===================================
//Você também pode usar o "matcher" .resolves em sua declaração esperada, e Jest irá aguardar a promessa resolver. Se a promessa for rejeitada, o teste automaticamente irá falhar.
test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

//Se você espera que uma promessa seja rejeitada, use o "matcher" .rejects. Ele funciona analogicamente para o "matcher" .resolves. Se a promessa é cumprida, o teste automaticamente irá falhar.
// test('the fetch fails with an error', () => {
  //   return expect(fetchData()).rejects.toMatch('error');
  // });

