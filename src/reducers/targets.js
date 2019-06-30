const baseState = [
];

const target = (state, action) => {
  switch (action.type) {
    case "ADD_TARGET":
      return {
        id: action.payload,
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        value: Math.floor(Math.random() * 3) + 5
      };
    case "UPDATE_TARGET":
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
    case "UPDATE_TARGET":
      return state.map(t => action.payload.id === t.id ? target(t, action) : t );
    case "ADD_TARGET":
      return [...state, target(undefined, action)];
    case "DELETE_TARGET":
      return state.filter(t => t.id !== action.id);
    case "CLICK_TILE":
      return state;
    default:
      return state;
  }
};

export default targets;
