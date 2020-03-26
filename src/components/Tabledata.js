import React from "react";

class TableData extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      age: "",
      address: "",
      isEdit: false,
      repairId: null,
      dataArray: []
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleNameChange = e => {
    this.setState({ userName: e.target.value });
  };
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handleAgeChange = e => {
    this.setState({ age: e.target.value });
  };
  handleAddressChange = e => {
    this.setState({ address: e.target.value });
  };
  componentDidUpdate(){console.log(this.state.dataArray);
  }
  handleSelectSubmit = e => {
    e.preventDefault()
    if(!this.state.userName){
     alert("fill username");
    }else if (!this.state.email){
     alert("fill email")
    }else if(!this.state.age){
      alert("fill age")
    }else if (!this.state.address){
      alert ("fill address")
    }else{
      this.setState({
        dataArray: [
          ...this.state.dataArray,
          {
            name: this.state.userName,
            email: this.state.email,
            age: this.state.age,
            address: this.state.address
          }
        ]
      });
    }
   
    this.handleClear();
  };
  handleClear = () => {
    this.setState({
      userName: "",
      email: "",
      age: "",
      address: "",
      isEdit: false
    });
  };

  handleRemove = e => {
    const index = e.target.id;
    // this.setState(this.state.dataArray.splice(index, 1));
    var array = [...this.state.dataArray]//*I frogeted to Clone original Array
    array.splice(index,1)
    this.setState({dataArray:array})
    console.log("HHHH->", this.state.dataArray);
    console.log(e.target.id);    
  };

  handleEdit = e => {
    //    this.setState(this.state.userName)
    const index = e.target.id;

    this.setState({
      userName: this.state.dataArray[index].name,
      email: this.state.dataArray[index].email,
      age: this.state.dataArray[index].age,
      address: this.state.dataArray[index].address,
      dataArray: [...this.state.dataArray],
      repairId: e.target.id,
      isEdit: true
    });
    console.log(e);
  };

  handleUpdate = e => {
    this.setState(
      this.state.dataArray.splice(this.state.repairId, 1, {
        name: this.state.userName,
        email: this.state.email,
        age: this.state.age,
        address: this.state.address
      })
    );
    this.handleClear();
    console.log("ttttt", e.target.id);
  };

  render() {
    return (
      <div className="">
        <h3 className="text-center font-italic">Form data</h3>
        <div className="pt-3 container">
          <div className="d-flex flex-row flex-wrap justify-content-center">
            <div className="py-2 col-lg-6 col-sm-12">UserName:
              <input
                className="form-control"
                type="text"
                placeholder="username"
                onChange={e => this.handleNameChange(e)}
                value={this.state.userName}
              />
            </div>
            <div className="py-2 col-lg-6 col-sm-12">Email:
              <input
                className="form-control"
                type="text"
                placeholder="email"
                onChange={e => this.handleEmailChange(e)}
                value={this.state.email}
              />
            </div>
            <div className="py-2 col-lg-6 col-sm-12">Age:
              <input
                className="form-control"
                type="text"
                placeholder="age"
                onChange={e => this.handleAgeChange(e)}
                value={this.state.age}
              />
            </div>

            <div className="py-2 col-lg-6 col-sm-12">Address:
              <input
                className="form-control"
                type="text"
                placeholder="address"
                onChange={e => this.handleAddressChange(e)}
                value={this.state.address}
              />
            </div>

            <div className="pt-3 container">
              <div className="p-3 col text-center">
                <button
                  className="btn btn-primary" style={{width: '200px'}}
                  onClick={
                    this.state.isEdit
                      ? e => this.handleUpdate(e)
                      : e=>this.handleSelectSubmit(e)
                  }
                >
                  {this.state.isEdit ? "Update" : "Submit"}
                </button> <button className="btn btn-primary" onClick={this.handleClear} style={{width: '200px'}}>
                  Clear
                </button>
                
              </div>
            </div>
          </div>
        </div>

        <div className="table-responsive pt-5 container">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Address</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {this.state.dataArray.map((value, key) => (
                <tr key={key} id={key} onClick={e => this.handleRemove(e)}>
                  <td>{key + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>{value.email}</td>
                  <td>{value.address}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      id={key}
                      onClick={e => this.handleRemove(e)}
                    >
                      Delete
                    </button>{" "}
                    <button
                      className="btn btn-warning"
                      id={key}
                      onClick={e => this.handleEdit(e)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default TableData;