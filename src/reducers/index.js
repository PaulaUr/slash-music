const INCREMENTAR = "INCREMENTAR";
const DECREMENTAR = "DECREMENTAR";

export const incrementar = () => ({
  type: INCREMENTAR,
});

export const decrementar = () => ({
  type: DECREMENTAR,
});

const intialState = 0;
export default function (state = intialState, action) {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case DECREMENTAR:
      return state - 1;
      break;
    default:
      return state;
  }
}
