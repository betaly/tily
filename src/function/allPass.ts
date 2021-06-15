import {Pred} from '../typings/types';
import curryN from './curryN';

interface AllPass {
  <T>(preds: ArrayLike<Pred<T>>): Pred<T>;

  <T>(preds: ArrayLike<Pred<T>>, ...args: T[]): boolean;
}

/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * @param {Array} fns predicates
 * @param {...*} args passed arguments to predicates
 * @return {Function}
 * @example
 *
 *      var isQueen = propEq('rank', 'Q');
 *      var isSpade = propEq('suit', '♠︎');
 *      var isQueenOfSpades = allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
export const allPass = curryN(2, <T>(fns: ArrayLike<Pred<T>>, ...args: T[]) => {
  for (let i = 0; i < fns.length; i++) {
    if (!fns[i](...args)) {
      return false;
    }
  }

  return true;
}) as AllPass;

export default allPass;
