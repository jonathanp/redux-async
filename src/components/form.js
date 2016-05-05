const React = require('react');
const { connect } = require('react-redux');
const { add } = require('../actions');

const Form = ({ onAdd }) => (
  <div>
    <input type="text" ref={(el) => { this.input = el; }} />
    <button type="button" onClick={() => {
      this.input.value && onAdd(this.input.value);
      this.input.value = '';
    }}>Add</button>
  </div>
);

Form.displayName = 'Form';

const mapDispatchToProps = (dispatch) => ({
  onAdd: (content) => { dispatch(add(content)); }
});

module.exports = connect(null, mapDispatchToProps)(Form);
