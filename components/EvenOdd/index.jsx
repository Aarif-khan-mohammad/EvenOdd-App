import {Component} from 'react'
import './index.css'

class EvenOdd extends Component{

  state = {
    number: 0,
    isEven: false
  }

  randomNumGen1 = () =>{
    const {number} = this.state ;
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState((prevState)=>({number : prevState.number + randomNumber}))
    if(number % 2 === 0){
      this.setState({isEven: true})
    }else{
      this.setState({isEven: false})
    }
  }

  randomNumGen2 = () =>{
    const {number} = this.state ;
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState((prevState)=>({number : prevState.number - randomNumber}))
    if(number % 2 === 0){
      this.setState({isEven: true})
    }else{
      this.setState({isEven: false})
    }
  }

  
  render(){
    const {number , isEven} = this.state
    return(
      <div className='container'>
        <h1>Count {number}</h1>
        <h2>The Count is {isEven ? 'Even' : 'Odd'}</h2>
        <div className='buttons'>
          <button className='btn1' onClick={this.randomNumGen1}>Random Number Increment</button>
          <button className='btn2' onClick={this.randomNumGen2}>Random Number Decrement</button>
        </div>
        <p>*Increases and Decreases By Random Number Between 0 to 100</p>
      </div>
    )
  }
  
}

export default EvenOdd