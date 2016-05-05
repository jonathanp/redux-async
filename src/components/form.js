const React = require('react');

const Form = () => (
  <form>
    <input type="text" ref={(el) => { this.input = el; }} />
    <button type="button" onClick={() => console.log('add', this.input.value)}>Add</button>
  </form>
);

Form.displayName = 'Form';
module.exports = Form;
