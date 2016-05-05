const ADD = module.exports.ADD = 'ADD';
module.exports.add = (content) => ({ type: ADD, content });

const REMOVE = module.exports.REMOVE = 'REMOVE';
module.exports.remove = (id) => ({ type: REMOVE, id });
