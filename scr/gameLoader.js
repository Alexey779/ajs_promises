import json from './parser';
// eslint-disable-next-line import/no-unresolved
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return read().then((data) => json(data));
  }
}
