import React from 'react';

const InputData = ({updateValue, user, addUser}) => (
  <div className="input-field-header">
    <div className="col-xs-3 input-field">
      <input value={user.name} name="name" onChange={e => updateValue(e)} className="box-sizing" type="text" placeholder="Full name" required/>
    </div>
    <div className="col-xs-4 input-field">
      <input value={user.email} name="email" onChange={e => updateValue(e)} className="box-sizing-email" type="email" placeholder="E-mail address" required/>
    </div>
    <div className="col-xs-3 input-field">
      <input value={user.phone} name="phone" onChange={e =>updateValue(e)} className="box-sizing" type="number" placeholder="Phone number" required/>
    </div>
    <div className="col-xs-2 pull-right">
      <button type="button" onClick={addUser} className="add-user-button pull-right box-sizing">Add new</button>
    </div>
  </div>
)
export default InputData;
