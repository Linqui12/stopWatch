import { Component } from "react";

class Chao extends Component {
  constructor(props){
    super(props);
    this.state = {isHi:true};
  }
  switchState = ()=>{ 
    const {isHi} = this.state;   
    this.setState({isHi:!isHi}); 
  }
  render() {
    const {name, id} = this.props;
    const {isHi} = this.state;
    if(isHi){
      return <>
        <h2>{id}) Hi! {name}!</h2>
        <button onClick={this.switchState}>Switch</button>
      </>
    }
    return <p>{id}) Bye, {name}!</p>;
  }
}

export default Chao;