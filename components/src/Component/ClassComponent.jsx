import { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      count : 0
    }
  }
  increment = ()=>{
    this.setState({
      count : this.state.count + 1
    })
  }
  componentDidMount(){
    alert('component did mount')
  }
  componentDidUpdate(){
    alert('component did update')
  }
  render() {
    return (
      <div>
        <h1>Create Using Class Base Component:</h1>
        <h2>Count : {this.state.count}</h2>
        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    )
  }
}
