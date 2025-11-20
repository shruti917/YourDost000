import React from 'react'
import './Table.css'

const Table = ({currentUsers}) => {
  return (
    <div className="user-table">
      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>
                <img src={u.avatar} alt="" width="40" style={{ borderRadius: "50%" }} />
              </td>
              <td>{u.first_name} {u.last_name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
