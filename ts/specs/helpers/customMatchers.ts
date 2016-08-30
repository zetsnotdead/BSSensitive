import { CardClass } from './../../classes/hands/_interfaces'
import { Pair } from './../../classes/hands/Pair'
import { TwoPair } from './../../classes/hands/TwoPair'
import { Trips } from './../../classes/hands/Trips'
import { Straight } from './../../classes/hands/Straight'
import { Flush } from './../../classes/hands/Flush'
import { FullHouse } from './../../classes/hands/FullHouse'
import { Quads } from './../../classes/hands/Quads'
import { StraightFlush } from './../../classes/hands/StraightFlush'
import { HighCard } from './../../classes/hands/HighCard'
import { Card }  from './../../classes/hands/Card' 

function isCardClass(obj): boolean {
  let allowedClassNames = [ 'Pair', 'TwoPair', 'Trips', 'Straight', 'Flush', 'FullHouse', 'Quads', 'StraightFlush', 'HighCard' ]
  if (typeof obj  === 'function'){
    // if class
    return allowedClassNames.some( c => c === obj.name)
  } else {
    // if instance of class
    return allowedClassNames.some( c => c === obj.constructor.name )
  }
}


export let customMatchers = {
  toBeCardClassOf: (expected: CardClass) => {
    return { 
      compare: (actual: CardClass, expected: () => any) => {
        if(expected === undefined)
          throw new Error('toBeCardClassOf called without arguments')
        if(!isCardClass(actual))
          throw new Error('toBeCardClassOf matcher must be used on instance of CardClass');
        if(!isCardClass(expected) )
          throw new Error('toBeCardClassOf matcher must be compared against CardClass class')

        let passed = actual instanceof expected;
        let expectedClassName = expected.name;
        let actualClassName = actual.constructor.name;
        let message;

        if(passed) {
          message = `Expected result NOT to be an instance of ${expectedClassName} instead of ${actualClassName};`
        } else {
          message = `Expected result to be an instance of ${expectedClassName} instead of ${actualClassName};`
        }

        return {
          pass: passed,
          message: message
        }
      }
    }
  }
}