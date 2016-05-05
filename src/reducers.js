const { combineReducers } = require('redux');
const {
  ADD_REQUEST,
  ADD_SUCCESS,
  REMOVE_REQUEST,
  REMOVE_SUCCESS,
  LOAD_REQUEST,
  LOAD_SUCCESS
} = require('./actions');

function items(state = [], action) {
  switch (action.type) {
    case ADD_REQUEST:
      const lastIndex = state[state.length - 1] ? state[state.length - 1].id : 0;

      return state.concat({
        id: lastIndex + 1,
        content: action.content,
        pending: true
      });

    case ADD_SUCCESS:
      return state
        .filter(item => !item.hasOwnProperty('pending'))
        .concat({
          id: action.id,
          content: action.content
        });

    case REMOVE_REQUEST:
      return state.map(item => item.id === action.id ? Object.assign(item, { pending: true }) : item);

    case REMOVE_SUCCESS:
      return state.filter(item => item.id !== action.id);

    case LOAD_SUCCESS:
      return action.items;

    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case ADD_REQUEST:
    case REMOVE_REQUEST:
    case LOAD_REQUEST:
      return true;

    case ADD_SUCCESS:
    case REMOVE_SUCCESS:
    case LOAD_SUCCESS:
      return false;

    default:
      return state;
  }
}

module.exports = combineReducers({
  items,
  loading
});
