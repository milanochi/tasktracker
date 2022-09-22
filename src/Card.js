import React, { Component } from 'react';
import './App.css' ;
// import Persons from './Persons';



class Card extends Component{
    constructor(){
        super();
        this.state = {
            value: "Hit the button to subscribe",
            num: 0,
            isLoggedIn: false
        }

    }
    activate(){
        this.setState(
            {
                value : "Thanks for Subscribing"
            }
        )
    }

    count(){
        this.setState({
            num : this.state.num + 1
        })
    }
    

    render(){
        // if(this.state.isLoggedIn){
        //     return <div>Hello tee</div>
        // }
        // else{
        //     return <div>No Access</div>
        // }
    //     const persons = [{
    //         name: "John",
    //         language: "React"
    //     },{
    //         name: "Daniel",
    //         language: "Angular"
    //     },
    //     {
    //         name: "Jane",
    //         language: "Vue"
    //     }
    // ]
    // const personList =  persons.map((person, index) => <Persons key={index} person={person} />);
    
        return (
                
            <div>
                
        
            </div>
        )
    }
}
export default Card;