const defaultState = {
  lives: 3,
  score: 0,
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
        ...state,
        isStarted: false
      }
    case 'LOSE_LIFE':
      return {
        ...state,
        lives: state.lives - 1
      }
    case 'INC_SCORE':
      return {
        ...state,
        score: state.score + 1
      }
    default:
      return state;
  }
};

export default game;
