// eslint-disable-next-line import/no-unresolved
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then((saving) => saving, (error) => error);
