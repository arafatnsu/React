import React from 'react';

const InputData = () => (
  <div className="input-field-header">
    <div className="col-xs-3 input-field">
      <input className="box-sizing" type="text" placeholder="Full name" />
    </div>
    <div className="col-xs-4 input-field">
      <input className="box-sizing-email" type="email" placeholder="E-mail address" />
    </div>
    <div className="col-xs-3 input-field">
      <input className="box-sizing" type="phone" placeholder="Phone number" />
    </div>
    <div className="col-xs-2 pull-right">
      <button type="button" className="add-user-button pull-right box-sizing">Add new</button>
    </div>
  </div>
)
export default InputData;
