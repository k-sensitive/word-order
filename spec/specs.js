describe('wordOrder', function(){
  it('returns the number of times world appears', function(){
    expect(wordOrder('hello hello hello hello hello hello hello hello hello word word word word word word word word word word')).to.equal("hello 1 world 2 something 2 type 1");
  });

  it('returns the number of times world appears', function(){
    expect(wordOrder('hello world world something type something')).to.equal("hello 1 world 2 something 2 type 1");
  });

  it('returns the number of times world appears', function(){
    expect(wordOrder('hello world world')).to.equal("hello 1 world 2");
  });

  it('returns the number of times world appears', function(){
    expect(wordOrder('world world')).to.equal("world 2");
  });
});
