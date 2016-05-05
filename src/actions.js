const ADD_REQUEST    = 'ADD_REQUEST';
const ADD_SUCCESS    = 'ADD_SUCCESS';
const REMOVE_REQUEST = 'REMOVE_REQUEST';
const REMOVE_SUCCESS = 'REMOVE_SUCCESS';
const LOAD_REQUEST   = 'LOAD_REQUEST';
const LOAD_SUCCESS   = 'LOAD_SUCCESS';

const add = (content) => (dispatch) => {
  dispatch({ type: ADD_REQUEST, content });

  const params = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content })
  };

  fetch('//localhost:4000/items', params)
    .then(data => data.json())
    .then(item => {
      dispatch({
        type: ADD_SUCCESS,
        id: item.id,
        content: item.content
      });
    });
};

const remove = (id) => (dispatch) => {
  dispatch({ type: REMOVE_REQUEST, id });

  const params = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  fetch(`//localhost:4000/items/${id}`, params)
    .then(() => {
      dispatch({
        type: REMOVE_SUCCESS,
        id
      });
    });
};

const load = () => (dispatch) => {
  dispatch({ type: LOAD_REQUEST });

  fetch('//localhost:4000/items')
    .then(data => data.json())
    .then(items => {
      dispatch({
        type: LOAD_SUCCESS,
        items
      });
    });
};

module.exports = {
  ADD_REQUEST,
  ADD_SUCCESS,
  REMOVE_REQUEST,
  REMOVE_SUCCESS,
  LOAD_REQUEST,
  LOAD_SUCCESS,

  add,
  remove,
  load
};
