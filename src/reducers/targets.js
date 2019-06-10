let TARGET_IDS = 0;

const baseState = [
  { id: 0, x: 50, y: 30, value: Math.floor(Math.random() * 5) + 3 }
];

const target = (state, action) => {
  switch (action.type) {
    case "ADD_TARGET":
      return {
        id: TARGET_IDS++,
        x: Math.floor(Math.random() * 96) + 5,
        y: Math.floor(Math.random() * 56) + 5,
        value: Math.floor(Math.random() * 5) + 3
      };
    case "TIME_INTERVAL":
      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state;
  }
};

const targets = (state = baseState, action) => {
  switch (action.type) {
    case "TIME_INTERVAL":
      return state.map(t => target(t, action));
    case "ADD_TARGET":
      return [...state, target(undefined, action)];
    case "DELETE_TARGET":
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

export default targets;
