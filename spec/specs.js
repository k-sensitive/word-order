describe('wordOrder', function(){
  it('returns the number of times world appears', function(){
    expect(wordOrder('hello hello hello hello hello hello hello hello hello word word word word word word word word word word')).to.equal("word : 10 , hello : 9");
  });

  it('returns the number of times world appears', function(){
    expect(wordOrder('hello world world something type something')).to.equal("something : 2 , world : 2 , hello : 1 , type : 1");
  });

  it('returns the number of times world appears', function(){
    expect(wordOrder('hello world world')).to.equal("world : 2 , hello : 1");
  });

  it('returns the number of times world appears', function(){
    expect(wordOrder('world world')).to.equal("world : 2");
  });
});
