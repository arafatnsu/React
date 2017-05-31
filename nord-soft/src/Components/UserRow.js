import React from 'react'

const UserRow = ({name, email, phone}) => (
  <div className="row user-info">
    <div className="col-xs-4 col-sm-3 text-info username">{name}</div>
    <div className="col-xs-8 col-sm-4">{email}</div>
    <div className="hidden-xs col-sm-3 text-warning">{phone}</div>
    <div className="hidden-xs col-sm-1">
      <span className="glyphicon glyphicon-pencil text-info"></span>
    </div>
    <div className="hidden-xs col-sm-1">
      <span className="glyphicon glyphicon-trash text-danger"></span>
    </div>
  </div>
)


export default UserRow
