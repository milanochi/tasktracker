import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

//passing method as props
class parentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        parentName: 'Greet Parent',
        isLoggedIn: true
      }
      this.getStatus = this.getStatus.bind(this)
    }

    getStatus(){
        alert (`${this.state.parentName}`)
    }
  
  render() {
    const users = [{
      name: "John",
      language: "React"
  },{
      name: "Daniel",
      language: "Angular"
  },
  {
      name: "Jane",
      language: "Vue"
  }
]
// const devs = users.map((user, index) =>  key={index} person={user})
    return (

      this.state.isLoggedIn ? (
          <div>
              <ChildComponent getHandler ={this.getStatus} />
              <div>
      <button>Create Account</button>
        </div>
          </div>
      ) : <div>Not found</div>
 
      
    )
  }
}

export default parentComponent;