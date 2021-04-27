const plant = require('../src/plant');


describe('Plant', () => {
  test('it grows a 1 stem 1 flower plant at correct temp', () => {
    expect(plant( "@", "1", "1", "20")).toEqual("-@")
  });

  test('it grows a different flower on 1 stem 1 flower at correct temp ', () => {
    expect(plant( "!", "1", "1", "20")).toEqual("-!")
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