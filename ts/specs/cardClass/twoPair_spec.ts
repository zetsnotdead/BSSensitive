import { HandRankSearch } from './../../classes/hands/_handReading'
import { TwoPair } from './../../classes/hands/TwoPair'
import { Card, CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, TwoPairParams } from './../../classes/_interfaces'
import { card } from './../helpers/methods'



describe('TwoPair', function() {
  
  describe('when creating an instance of TwoPair', function() {
  let hand: TwoPair;
    beforeEach(function() {
      let params: TwoPairParams = {
        cards : [ card('aceOfSpades'), card('aceOfClubs'), card('kingOfclubs'), card('kingOfDiamonds'), card('jackOfClubs')],
        handStrength: HandStrength.twoPair,
        lowerPair: CardValue.king,
        higherPair: CardValue.ace
      }
      hand = new TwoPair( params )
    });
      
    it('should set the lower pair correctly', function() {
      expect(hand.lowerPair).toEqual(CardValue.king)
    });
    it('should set the higher pair correctly', function() {
      expect(hand.lowerPair).toEqual(CardValue.king)
    });
  });

describe('when comparing to another TwoPair', function() {
  
  describe('with two bigger pairs', function() {
    let firstTwoPair: TwoPair;
    let secondTwoPair: TwoPair;
      beforeEach(function() {
        let params: TwoPairParams = {
          cards: [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfSpades'), card('kingOfDiamonds'), card('duceOfClubs')],
          handStrength: HandStrength.twoPair,
          higherPair: CardValue.ace,
          lowerPair: CardValue.king
        }
        let anotherParams: TwoPairParams = {
          cards: [ card('queenOfSpades'), card('queenOfClubs'), card('jackOfSpades'), card('jackOfClubs'), card('duceOfSpades')],
          handStrength: HandStrength.twoPair,
          higherPair: CardValue.queen,
          lowerPair: CardValue.jack
        }
        firstTwoPair = new TwoPair(params)
        secondTwoPair = new TwoPair(anotherParams)
      });
        
      it('should return 1 if higher', function() {
        expect(firstTwoPair.compareTo(secondTwoPair)).toEqual(1)
      });
      it('should return -1 if lower', function() {
        expect(secondTwoPair.compareTo(firstTwoPair)).toEqual(-1)
      }); 
    });

  describe('with one bigger pair', function() {
    let firstTwoPair: TwoPair;
    let secondTwoPair: TwoPair;
      beforeEach(function() {
        let params: TwoPairParams = {
          cards: [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfSpades'), card('kingOfDiamonds'), card('duceOfClubs')],
          handStrength: HandStrength.twoPair,
          higherPair: CardValue.ace,
          lowerPair: CardValue.king
        }
        let anotherParams: TwoPairParams = {
          cards: [ card('aceOfClubs'), card('aceOfHearts'), card('jackOfSpades'), card('jackOfClubs'), card('duceOfSpades')],
          handStrength: HandStrength.twoPair,
          higherPair: CardValue.ace,
          lowerPair: CardValue.jack
        }
        firstTwoPair = new TwoPair(params)
        secondTwoPair = new TwoPair(anotherParams)
      });
        
      it('should return 1 if higher', function() {
        expect(firstTwoPair.compareTo(secondTwoPair)).toEqual(1)
      });
      it('should return -1 if lower', function() {
        expect(secondTwoPair.compareTo(firstTwoPair)).toEqual(-1)
      }); 
    });

  describe('with the same pair and different kickers', function() {
    let firstTwoPair: TwoPair;
    let secondTwoPair: TwoPair;
      beforeEach(function() {
        let params: TwoPairParams = {
          cards: [ card('aceOfClubs'), card('aceOfHearts'), card('kingOfClubs'), card('kingOfHearts'), card('threeOfSpades')],
          handStrength: HandStrength.twoPair,
          higherPair: CardValue.ace,
          lowerPair: CardValue.king
        }
        let anotherParams: TwoPairParams = {
          cards: [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfSpades'), card('kingOfDiamonds'), card('duceOfClubs')],
          handStrength: HandStrength.twoPair,
          higherPair: CardValue.ace,
          lowerPair: CardValue.king
        }
        firstTwoPair = new TwoPair(params)
        secondTwoPair = new TwoPair(anotherParams)
      });
        
      it('should return 1 if higher', function() {
        expect(firstTwoPair.compareTo(secondTwoPair)).toEqual(1)
      });
      it('should return -1 if lower', function() {
        expect(secondTwoPair.compareTo(firstTwoPair)).toEqual(-1)
      }); 
    });
    
  });

  describe('with the same pair and the same kickers', function() {
    let firstTwoPair: TwoPair;
    let secondTwoPair: TwoPair;
      beforeEach(function() {
        let params: TwoPairParams = {
          cards: [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfSpades'), card('kingOfDiamonds'), card('duceOfClubs')],
          handStrength: HandStrength.twoPair,
          higherPair: CardValue.ace,
          lowerPair: CardValue.king
        }
        let anotherParams: TwoPairParams = {
          cards: [ card('aceOfClubs'), card('aceOfHearts'), card('kingOfClubs'), card('kingOfHearts'), card('duceOfSpades')],
          handStrength: HandStrength.twoPair,
          higherPair: CardValue.ace,
          lowerPair: CardValue.king
        }
        firstTwoPair = new TwoPair(params)
        secondTwoPair = new TwoPair(anotherParams)
      });
        
      it('should return 1 if higher', function() {
        expect(firstTwoPair.compareTo(secondTwoPair)).toEqual(0)
      });
      it('should return -1 if lower', function() {
        expect(secondTwoPair.compareTo(firstTwoPair)).toEqual(0)
      }); 
    });
    
  });
  
  