import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/header.jsx';

export default class CommentLox extends React.Component{

  constructor(){
    super();
    this.state = {
      name : "Alberto"
    }
}

  componentDidMount (){ 
    console.log(this)
     //this.setState({name : "TNT"})  
  }

  render(){
    return(
      <div>
    <CommentBox />
    uPDATE 6 18 1
      </div>
    )
  }
}

const app = document.getElementById('example');
const app2 = document.getElementById('example2');

ReactDOM.render(<CommentLox/>, app);

