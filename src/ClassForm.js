// import React, { Component } from 'react';
// import './App.css' ;


//  class Form extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          username : '',
//          fullName: '',
//          language: 'React'
//       }
//     }

//     changeUserName = (event) =>{
//         this.setState({
//             username: event.target.value
//         })
//     }
//     changeFullName = (event) =>{
//         this.setState({
//             fullName : event.target.value
//         })
//     }
//     changelanguage = (event) =>{
//         this.setState({
//             language: event.target.value
//         })
//     }
//     submitDetails = (event) =>{
//         alert(`${this.state.username}, ${this.state.fullName}, ${this.state.language}`);
//         event.preventDefault()
//     }
//   render() {
//     return (
//       <div>
//           <form className='container' onSubmit={this.submitDetails}>
//               <label>Username: </label>
//               <input type='text' value={this.state.username} onChange={this.changeUserName}/>

//               <label>Please fill in form</label>
//               <textarea cols= "50" rows="5" value={this.state.fullName} onChange={this.changeFullName}></textarea>

//               <label>Choose language</label>
//               <select value={this.state.language}  onChange={this.changelanguage}>
//                   <option value="React">React</option>
//                   <option value="Vue">Vue</option>
//                   <option value="Angular">Angular</option>
//               </select>

//               <button type='submit'>Submit</button>
//           </form>
//       </div>
//     )
//   }
// }

// export default Form