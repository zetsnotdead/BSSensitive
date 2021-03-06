import { Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardTextures,  BoardParams, Card } from './../_interfaces'
import { ParamsGuard, ParamsGuardParams } from './../mixins/paramsGuard'
import { CardGuard } from './../mixins/CardGuard'
import { ArrayGuard, ArrayGuardParams } from './../mixins/ArrayGuard'
import { applyMixins } from './../mixins/_apply'
import { ParamsError } from './../errors/errors'

export class Board implements ParamsGuard, CardGuard, ArrayGuard {
  checkParams: (params: ParamsGuardParams) => any;
  checkCard: (params: Card) => any;
  checkArray: (params: ArrayGuardParams) => any;

  private _boardTextures: BoardTextures;
  private _cards: BoardCards;

  constructor(params: BoardParams) {
    this.checkParams({ actualParams: params, expectedKeys: ['cards', 'boardTextures']});
    this.initializeBoardTextures(params.boardTextures);
    this.initializeCards(params.cards)
  }


  get cards(): BoardCards {
    return this._cards;
  }

  get textures(): BoardTextures {
    return this._boardTextures;
  }

  private checkCards(cards: Card[]) {
  // catches errors from guards and appends params to the error msg for easier debug
    try {
      this.checkArray({typeName: 'Card', arr: cards, minLength: 3, maxLength: 5})
    } catch (e) {
        throw new ParamsError(`${e.message}`, cards)
    }
    cards.forEach( (card, i) => {
      try {
        this.checkCard(card)
      } catch (e) {
        throw new ParamsError(`${e.message} | Failed at index: ${i}`, cards)
      }
    })
  }

  private initializeCards(cards: BoardCards) {
    this.checkCards(cards)
    this._cards = cards;
  }

  private initializeBoardTextures(textures: BoardTextures) {
    // add some checks...
    this._boardTextures = textures;
  }
}

applyMixins(Board, [ParamsGuard, CardGuard, ArrayGuard])