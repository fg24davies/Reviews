const plant = require('../src/plant');


describe('Plant', () => {
  test.skip('it grows a 1 stem 1 flower plant at correct temp', () => {
    expect(plant( "@", 1, 1, 20)).toEqual("-@")
  });

  test.skip('it grows a different flower on 1 stem 1 flower at correct temp ', () => {
    expect(plant( "!", 1, 1, 20)).toEqual("-!")
  });

  test.skip('it grows a 1 stem 2 flower at correct temp ', () => {
    expect(plant("@", 1, 2, 20)).toEqual("-@@")
  });

  test.skip('it grows a 2 stem 1 flower at correct temp ', () => {
    expect(plant("@", 2, 1, 20)).toEqual("--@--@")
  });

  test.skip('it grows a 2 stem 2 flower at correct temp ', () => {
    expect(plant("@", 2, 2, 20)).toEqual("--@@--@@")
  });

   test.skip('it only produces 1 flower at the end of the right amount of stem if temperature is not in 20-30 incl ', () => {
    expect(plant("@", 2, 2, 19)).toEqual("----@")
  });
  
  test.skip('it grows a 4 stem 2 flower at correct temp ', () => {
    expect(plant("$", 4, 2, 30)).toEqual("----$$----$$----$$----$$")
  });

});




/*
| Input               | Output     |
| ------------------- | ---------- |
| "@", "1", "1", "20" | "-@"       |
| "!", "1", "1", "20" | "-!"       |
| "@", "2", "1", "20" | "--@--@"   |
| "@", "1", "2", "20" | "-@@"      |
| "@", "2", "2", "20" | "--@@--@@" |
| "@", "2", "2", "19" | "----@"    |
*/