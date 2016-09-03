import { StraightTextureType } from './../../classes/boards/TextureTypes/Straight'
import { card } from './../helpers/methods'
import { customMatchers } from './../helpers/customMatchers'
import { Texture, CardValue } from './../../classes/_interfaces'



describe('CardValueTextureType', function() {

  let values: number[];
  let textureType: Texture;

  beforeEach(function() {
    jasmine.addMatchers(customMatchers as any)
  });
    
  describe('when given one straight board', function() {
    describe('with gap of two between two lowest cards (ex. T96)', function() {
      it('should set type to OneStraight', function() {
        values = [ CardValue.ten, CardValue.nine, CardValue.six]
        textureType = new StraightTextureType({ values: values}).type
        expect(textureType).toBeOfTextureType('OneStraight')
      });  
    });
    describe('with gap of two between two highest cards (ex. T76)', function() {
      it('should set type to OneStraight', function() {
        values = [CardValue.ten, CardValue.seven, CardValue.six]
        textureType = new StraightTextureType({ values: values}).type
        expect(textureType).toBeOfTextureType('OneStraight')
      });  
    });
    describe('with gap of one between each cards (ex. T86)', function() {
      it('should set type to OneStraight', function() {
        values = [CardValue.ten, CardValue.eight, CardValue.six]
        textureType = new StraightTextureType({ values: values}).type
        expect(textureType).toBeOfTextureType('OneStraight')
      });  
    });
    describe('special case of QJT', function() {
      it('should set type to OneStraight', function() {
        values = [CardValue.queen, CardValue.jack, CardValue.ten]
        textureType = new StraightTextureType({ values: values}).type
        expect(textureType).toBeOfTextureType('OneStraight')
      });  
    });
    describe('special case of A23', function() {
      it('should set type to OneStraight', function() {
        values = [CardValue.ace, CardValue.duce, CardValue.three]
        textureType = new StraightTextureType({ values: values}).type
        expect(textureType).toBeOfTextureType('OneStraight')
      });  
    });
    describe('special case of AKQ', function() {
      it('should set type to OneStraight', function() {
        values = [CardValue.ace, CardValue.king, CardValue.queen]
        textureType = new StraightTextureType({ values: values}).type
        expect(textureType).toBeOfTextureType('OneStraight')
      });  
    });

  describe('when given two straight board', function() {   
    describe('with gap of one between two lowest cards (ex. T87)', function() {
      it('should set type to TwoStraight', function() {
        values = [ CardValue.ten, CardValue.eight, CardValue.seven]
        textureType = new StraightTextureType({ values: values}).type
        expect(textureType).toBeOfTextureType('TwoStraight')
      });  
    });
    describe('with gap of one between two highest cards (ex. T97)', function() {
      it('should set type to TwoStraight', function() {
        values = [CardValue.ten, CardValue.nine, CardValue.seven]
        textureType = new StraightTextureType({ values: values}).type
        expect(textureType).toBeOfTextureType('TwoStraight')
      });  
    });
  });

  describe('when given three straight board', function() {   
    describe('with no gaps between cards (ex. 456)', function() {
      it('should set type to ThreeStraight', function() {
        values = [ CardValue.four, CardValue.five, CardValue.six]
        textureType = new StraightTextureType({ values: values}).type
        expect(textureType).toBeOfTextureType('ThreeStraight')
      });  
    });
  });

  describe('when given zero straight board', function() {   
    describe('with no gaps between cards (ex. 459)', function() {
      it('should set type to ThreeStraight', function() {
        values = [ CardValue.four, CardValue.five, CardValue.nine]
        textureType = new StraightTextureType({ values: values}).type
        expect(textureType).toBeOfTextureType('ZeroStraight')
      });  
    });
  });

});
  