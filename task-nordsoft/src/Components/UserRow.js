import React from 'react';

const UserRow = ({name, email, phone})=>(
  <div className="row user-info">
    <div className="col-xs-4 col-sm-3 username">{name}</div>
    <div className="col-xs-8 col-sm-4">{email}</div>
    <div className="hidden-xs col-sm-3">{phone}</div>
    <div className="hidden-xs col-sm-1 text-center">
      <span className="glyphicon glyphicon-pencil edit-user" aria-hidden="true"></span>
    </div>
    <div className="hidden-xs col-sm-1 text-center">
      <span className="glyphicon glyphicon-trash delete-user" aria-hidden="true"></span>
    </div>
  </div>
)

export default UserRow;
