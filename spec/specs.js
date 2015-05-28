describe('wordOrder', function(){
  it('returns the number of times world appears', function(){
    expect(wordOrder('world world')).to.equal("world 2");
  });
});
