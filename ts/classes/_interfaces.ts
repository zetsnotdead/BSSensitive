import { Pair } from './hands/Pair'
import { TwoPair } from './hands/TwoPair'
import { Trips } from './hands/Trips'
import { Straight } from './hands/Straight'
import { Flush } from './hands/Flush'
import { FullHouse } from './hands/FullHouse'
import { Quads } from './hands/Quads'
import { StraightFlush } from './hands/StraightFlush'
import { HighCard } from './hands/HighCard'
import { Card }  from './hands/Card'
type Suit = 's' | 'c' | 'd' | 'h' | 'spade' | 'club' | 'diamond' | 'heart' | 'S' | 'C' | 'D' | 'H'
type CardClass = Pair | TwoPair | Trips | Straight | Flush | FullHouse | Quads | StraightFlush | HighCard

enum HandStrength {
  highCard,
  pair,
  twoPair,
  trips,
  straight,
  flush,
  fullHouse,
  quads,
  straightFlush
}

enum CardValue {
  duce = 2,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  jack,
  queen, 
  king,
  ace
}

interface Search {
  found: boolean
}

interface HandParams {
  cards: Card[],
  handStrength: HandStrength,
}

interface PairParams extends HandParams {
  pair: CardValue
}
interface TwoPairParams extends HandParams {
  lowerPair: CardValue,
  higherPair: CardValue
}
interface TripsParams extends HandParams {
  trips: CardValue
}
interface StraightParams extends HandParams {
}
interface FlushParams extends HandParams {
}
interface FullHouseParams extends HandParams {
  trips: CardValue,
  pair: CardValue
}
interface QuadsParams extends HandParams {
  quads: CardValue
}
interface StraightFlushParams extends HandParams {
}
interface HighCardParams extends HandParams {
}

type SearchesOnceAndRemembers = () => Search;

interface HandClass {
  resolveConflict(other: CardClass ): number
  setKickers(): void
}


type HoldemHoleCards = [Card, Card];
type OmahaHoleCards = [Card, Card, Card, Card];
type HoleCards =  HoldemHoleCards | OmahaHoleCards;
type HandCards = [Card, Card, Card, Card, Card];

type Flop = [Card, Card, Card];
type FlopTurn = [Card, Card, Card, Card];
type FlopTurnRiver = [Card, Card, Card, Card, Card];
type BoardCards = Flop | FlopTurn | FlopTurnRiver;

interface TheBestHandParams {
  playerCards: HoleCards,
  boardCards: BoardCards
}

interface CardParams {
  value: number,
  suit: Suit
}
interface BoardTextures {
  oneStraight: boolean,
  twoStraight: boolean,
  threeStraight: boolean,
  monotone: boolean,
  rainbow: boolean,
  twotone: boolean,
  oneBroadway: boolean,
  twoBroadway: boolean,
  threeBoardway: boolean,
  paired: boolean,
  notPaired: boolean
}

interface BoardByStreet {
  flop?: [Card, Card, Card],
  turn?: Card,
  river?: Card
}

interface TextureReaderParams {
  boardObject: BoardByStreet,
}

interface BoardParams{
  cards: BoardCards, 
  boardTextures?: BoardTextures
}

interface TypeCheck {
  straights: {
    isZeroStraight: () => boolean;
    isOneStraight: () => boolean;
    isTwoStraight: () => boolean;
    isThreeStraight: () => boolean;
  },
  suits:  {
    isRainbow: () => boolean;
    isTwoTone: () => boolean;
    isMonotone: () => boolean;
  },
  broadways: {
    isZeroBroadway: () => boolean;
    isSingleBroadway: () => boolean;
    isDoubleBroadway: () => boolean;
    isTrippleBroadway: () => boolean;
  },
  paired: {
    isPaired: () => boolean;
    // ... leaving the possibility of checking for trip, double paired boards etc.
    isNotPaired: () => boolean;
  }
}

type SuitTexture = 'Monotone'| 'TwoTone'| 'Rainbow'
type StraightTexture = 'OneStraight'| 'TwoStraight'| 'ThreeStraight' | 'ZeroStraight'
type PairedTexture = 'Paired'| 'DoublePaired' | 'NotPaired'
type CardValueTexture = 'OneBroadway'| 'TwoBroadway' | 'ThreeBroadway' | 'ZeroBroadway'
type Texture = SuitTexture | StraightTexture | PairedTexture | CardValueTexture


export { HandClass, Card, CardClass, HandStrength, HandParams,  Suit, CardValue, Search, 
  PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams, HighCardParams
  , SearchesOnceAndRemembers ,
  HoldemHoleCards, OmahaHoleCards, HoleCards, HandCards, Flop, FlopTurn, FlopTurnRiver, BoardCards, TheBestHandParams, CardParams, 
  TextureReaderParams, BoardTextures, BoardParams, BoardByStreet, TypeCheck, Texture, SuitTexture, StraightTexture, PairedTexture, CardValueTexture
}