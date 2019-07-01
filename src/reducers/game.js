const defaultState = {
  lives: 3,
  score: 0,
  multiplicator: 1,
  isStarted: false
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'GAME_START':
      return {
        ...defaultState,
        isStarted: true
      };
    case 'GAME_END':
      return {
        ...defaultState,
        isStarted: false
      }
    case 'LOSE_LIFE':
      return {
        ...state,
        lives: state.lives - 1,
        multiplicator: 1
      }
    case 'INC_SCORE':
      return {
        ...state,
        score: state.score + state.multiplicator,
        multiplicator: state.multiplicator < 10 ? state.multiplicator + 1 : state.multiplicator
      }
    default:
      return state;
  }
};

export default game;
