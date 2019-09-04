import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: [],
    numberOfSushisEaten: [],
    wallet: 100
  }

  handleEaten = (sushiObj) => {

    if (this.state.wallet - sushiObj.price < 0){
      alert("Sorry you broke")
    } else if(sushiObj.eaten) {

    } else {
      const mappedsushi = this.state.sushiList.map(sushi => {
        if (sushi.id === sushiObj.id){
          sushi.eaten = true
        }
        return sushi
      })
  
      const filteredSushi = this.state.sushiList.filter(sushi => sushi.eaten)
      this.setState({
        sushiList: mappedsushi, numberOfSushisEaten: filteredSushi, wallet: this.state.wallet - sushiObj.price
      })
    }
    
  }

  componentDidMount(){
    fetch(API)
    .then(resp=>resp.json())
    .then(data => { 
      this.setState({
        sushiList: data
      })})
  }
  render() {
    return (
      <div className="app">
        <SushiContainer sushiList={this.state.sushiList} handleEaten={this.handleEaten} />
        <Table numberOfSushisEaten={this.state.numberOfSushisEaten} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;