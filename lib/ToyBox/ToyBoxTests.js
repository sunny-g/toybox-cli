var expect = chai.expect;
// Declare section
describe('Main Tests', function(){

  // Declare function
  describe('Rock Paper Scissors', function(){

    // Declare test
    it('Defaults number of rounds to 3 and returns 27 arrays', function(){
      expect(rockPaperScissors().length).to.equal(27);
    });

    it('Takes in a number of rounds and returns the correct length', function(){
      expect(rockPaperScissors(4).length).to.equal(81);
    });
  });

  describe('Even Occurence', function(){

    it('Find the first item that occurs an even number of times in an array.', function(){
      expect(evenOccurrence(['cat', 'dog', 'dig', 'cat'])).to.equal('cat');
    });

    it('Works with numbers too.', function(){
      expect(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])).to.equal(4);
    });
  });
});