import React from 'react'

const UserTable = props=> (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {props.users.length>0?(
            props.users.map(user=>(
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                    <button onClick={()=>props.editRow(user)} className="button muted-button">Edit</button>
                    <button  onClick={()=>props.deleteUser(user.id)} className="button muted-button">Delete</button>
                </td>
            </tr>
            ))
            ) : (
                <tr>
                  <td colSpan={3}>No users</td>
                </tr>
        )}
     
    </tbody>
  </table>



<table className="table">
<thead className="thead-dark">
  <tr>
    <th scope="col">#</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>Larry</td>
    <td>the Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>
</table>

)

export default UserTable