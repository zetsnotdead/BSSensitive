import { Card, CardClass, HandParams,  Suit, CardValue , OmahaHoleCards, HoleCards, HandCards, Flop, FlopTurn, FlopTurnRiver, BoardCards, TheBestHandParams} from './../../classes/hands/_interfaces'
import { TheBestHand } from './../../classes/hands/_theBestHand'
import { HighCard } from './../../classes/hands/HighCard'
import { Pair } from './../../classes/hands/Pair'
import { TwoPair } from './../../classes/hands/TwoPair'
import { Trips } from './../../classes/hands/Trips'
import { Straight } from './../../classes/hands/Straight'
import { Flush } from './../../classes/hands/Flush'
import { FullHouse } from './../../classes/hands/FullHouse'
import { Quads } from './../../classes/hands/Quads'
import { StraightFlush } from './../../classes/hands/StraightFlush'
import { card } from './../helpers/methods'
import { customMatchers } from './../helpers/customMatchers'

describe('TheBestHand', function() {
  
  beforeEach(function() {
    jasmine.addMatchers(customMatchers as any)
  });
    
  describe('Omaha', function() {
    describe('when given 5 board cards', function() {
      
      describe('and hand of high card', function() {
      let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [ card('aceOfSpades'), card('jackOfDiamonds'), card('kingOfClubs'), card('queenOfspades') ]
          let boardCards: BoardCards = [ card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds'), card('nineOfDiamonds') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class HighCard', function() {
          expect(theBestHand.result).toBeCardClassOf(HighCard)
        });
      });

      describe('and hand including pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfClubs'), card('queenOfspades')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds'), card('nineOfDiamonds')  ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Pair', function() {
          expect( theBestHand.result ).toBeCardClassOf(Pair)
        });
      });

      describe('and hand including two pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfspades'), card('threeOfSpades'), card('fourOfClubs')]
          let boardCards: BoardCards = [ card('aceOfDiamonds'), card('kingOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds'), card('nineOfDiamonds')] 
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class TwoPair', function() {
          expect( theBestHand.result ).toBeCardClassOf(TwoPair)
        });
      });

      describe('and hand including trips', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('queenOfspades'), card('fiveOfDiamonds')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('aceOfClubs'), card('sevenOfDiamonds'), card('nineOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Trips', function() {
          expect( theBestHand.result ).toBeCardClassOf(Trips)
        });
      });

      describe('and hand including straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('fourOfClubs'), card('fiveOfDiamonds')]
          let boardCards: BoardCards = [card('queenOfClubs'), card('jackOfspades'), card('tenOfSpades'), card('sevenOfDiamonds'), card('nineOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Straight', function() {
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including wheel straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('queenOfClubs'), card('duceOfspades')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'),  card('sevenOfDiamonds'), card('nineOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Straight', function() {
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including flush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfSpades'), card('queenOfClubs') , card('nineOfDiamonds'),]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfSpades'), card('sevenOfDiamonds') , card('eightOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Flush', function() {
          expect( theBestHand.result ).toBeCardClassOf(Flush)
        });
      });

      describe('and hand including fullhouse', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'),  card('sevenOfDiamonds') , card('eightOfSpades')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('queenOfClubs'), card('fiveOfDiamonds'), card('aceOfClubs'), card('queenOfspades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class FullHouse', function() {
          expect( theBestHand.result ).toBeCardClassOf(FullHouse)
        });
      });

      describe('and hand including quads', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('sevenOfDiamonds') , card('eightOfSpades')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('queenOfClubs'), card('fiveOfDiamonds'), card('aceOfClubs'), card('aceOfHearts')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Quads', function() {
          expect( theBestHand.result ).toBeCardClassOf(Quads)
        });
      });

      describe('and hand including straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [ card('aceOfSpades'), card('kingOfSpades'), card('sevenOfDiamonds') , card('eightOfSpades')]
          let boardCards: BoardCards = [card('tenOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('queenOfSpades'), card('jackOfSpades') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class StraightFlush', function() {
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
      });

      
      describe('and hand including wheel straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
        let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('duceOfSpades') ,card('kingOfSpades'), card('sevenOfDiamonds') ]
          let boardCards: BoardCards = [card('fourOfSpades'), card('fiveOfSpades'), card('queenOfSpades'), card('threeOfSpades'), card('eightOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class StraightFlush', function() {
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
      });
    }); // desc 5 board
    
    describe('when given 4 boad cards', function() {
      describe('and hand of high card', function() {
      let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [ card('aceOfSpades'), card('jackOfDiamonds'), card('kingOfClubs'), card('queenOfspades') ]
          let boardCards: BoardCards = [ card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class HighCard', function() {
          expect( theBestHand.result ).toBeCardClassOf(HighCard)
        });
      });

      describe('and hand including pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfClubs'), card('queenOfspades')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds')  ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Pair', function() {
          expect(theBestHand.result).toBeCardClassOf(Pair)
        });
      });

      describe('and hand including two pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfspades'), card('threeOfSpades'), card('fourOfClubs')]
          let boardCards: BoardCards = [ card('aceOfDiamonds'), card('kingOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds')] 
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class TwoPair', function() {
          expect( theBestHand.result ).toBeCardClassOf(TwoPair)
        });
      });

      describe('and hand including trips', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('queenOfspades'), card('fiveOfDiamonds')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('aceOfClubs'), card('sevenOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Trips', function() {
          expect( theBestHand.result ).toBeCardClassOf(Trips)
        });
      });

      describe('and hand including straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('fourOfClubs'), card('fiveOfDiamonds')]
          let boardCards: BoardCards = [card('queenOfClubs'), card('jackOfspades'), card('tenOfSpades'), card('sevenOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Straight', function() {
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including wheel straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('queenOfClubs'), card('duceOfspades')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'),  card('sevenOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Straight', function() {
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including flush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfSpades'), card('queenOfClubs') , card('nineOfDiamonds'),]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfSpades'), card('eightOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Flush', function() {
          expect( theBestHand.result ).toBeCardClassOf(Flush)
        });
      });

      describe('and hand including fullhouse', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'),  card('sevenOfDiamonds') , card('eightOfSpades')]
          let boardCards: BoardCards = [card('queenOfClubs'), card('fiveOfDiamonds'), card('aceOfClubs'), card('queenOfspades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class FullHouse', function() {
          expect( theBestHand.result ).toBeCardClassOf(FullHouse)
        });
      });

      describe('and hand including quads', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('sevenOfDiamonds') , card('eightOfSpades')]
          let boardCards: BoardCards = [card('threeOfSpades'),  card('fiveOfDiamonds'), card('aceOfClubs'), card('aceOfHearts')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Quads', function() {
          expect( theBestHand.result ).toBeCardClassOf(Quads)
        });
      });

      describe('and hand including straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [ card('aceOfSpades'), card('kingOfSpades'), card('sevenOfDiamonds') , card('eightOfSpades')]
          let boardCards: BoardCards = [card('tenOfSpades'), card('fourOfClubs'), card('queenOfSpades'), card('jackOfSpades') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class StraightFlush', function() {
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
      });

      
      describe('and hand including wheel straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
        let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('duceOfSpades') ,card('kingOfSpades'), card('sevenOfDiamonds') ]
          let boardCards: BoardCards = [card('fourOfSpades'), card('fiveOfSpades'), card('queenOfSpades'), card('threeOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class StraightFlush', function() {
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
      });
    }); // desc 4 board cards
    
    describe('when given 3 board cards', function() {
      describe('and hand of high card', function() {
      let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [ card('aceOfSpades'), card('jackOfDiamonds'), card('kingOfClubs'), card('queenOfspades') ]
          let boardCards: BoardCards = [ card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class HighCard', function() {
          expect( theBestHand.result ).toBeCardClassOf(HighCard)
        });
      });

      describe('and hand including pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfClubs'), card('queenOfspades')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')  ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Pair', function() {
          expect(theBestHand.result).toBeCardClassOf(Pair)
        });
      });

      describe('and hand including two pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfspades'), card('threeOfSpades'), card('fourOfClubs')]
          let boardCards: BoardCards = [ card('aceOfDiamonds'), card('kingOfClubs'), card('fiveOfDiamonds')] 
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class TwoPair', function() {
          expect( theBestHand.result ).toBeCardClassOf(TwoPair)
        });
      });

      describe('and hand including trips', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('queenOfspades'), card('fiveOfDiamonds')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('aceOfClubs')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Trips', function() {
          expect( theBestHand.result ).toBeCardClassOf(Trips)
        });
      });

      describe('and hand including straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('fourOfClubs'), card('fiveOfDiamonds')]
          let boardCards: BoardCards = [card('queenOfClubs'), card('jackOfspades'), card('tenOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Straight', function() {
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including wheel straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('queenOfClubs'), card('duceOfspades')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Straight', function() {
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including flush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfSpades'), card('queenOfClubs') , card('nineOfDiamonds'),]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fiveOfSpades'), card('eightOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Flush', function() {
          expect( theBestHand.result ).toBeCardClassOf(Flush)
        });
      });

      describe('and hand including fullhouse', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'),  card('sevenOfDiamonds') , card('eightOfSpades')]
          let boardCards: BoardCards = [card('queenOfClubs'), card('aceOfClubs'), card('queenOfspades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class FullHouse', function() {
          expect( theBestHand.result ).toBeCardClassOf(FullHouse)
        });
      });

      describe('and hand including quads', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('sevenOfDiamonds') , card('eightOfSpades')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('aceOfClubs'), card('aceOfHearts')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class Quads', function() {
          expect( theBestHand.result ).toBeCardClassOf(Quads)
        });
      });

      describe('and hand including straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [ card('aceOfSpades'), card('kingOfSpades'), card('sevenOfDiamonds') , card('eightOfSpades')]
          let boardCards: BoardCards = [card('tenOfSpades'), card('queenOfSpades'), card('jackOfSpades') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class StraightFlush', function() {
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
      });

      
      describe('and hand including wheel straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
        let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('duceOfSpades') ,card('kingOfSpades'), card('sevenOfDiamonds') ]
          let boardCards: BoardCards = [card('fourOfSpades'), card('fiveOfSpades'), card('threeOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class StraightFlush', function() {
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
      });
    }); // desc 3 board cards
    
    
  });  // NLHE

    
});