import React, { Component } from 'react';
import './App.css';
import data, { dataType } from './data';
import UserComponent from './userComponent'


type IProps = {}
type IState = {
  data: dataType[];
  index: number;
}
class App extends Component<IProps, IState> {
  state: IState = {
    data: data,
    index: 0
  }
  constructor(props: IProps) {
    super(props);
    this.setIndex = this.setIndex.bind(this)
  }
  
  setIndex(num: number) {
    this.setState({index: num})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Home</h3>
        </header>
        <UserComponent key={this.state.index} data={this.state.data[this.state.index]} length={this.state.data.length} setIndex={this.setIndex} index={this.state.index}/>
      </div>
    );
  }
}

export default App;
