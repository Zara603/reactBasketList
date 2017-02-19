import React from 'react';
import Header from './Header';
import Order from './Order';
import Fish from './Fish';
import Inventory from './Inventory';
import sampleFish from '../sample-fishes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addFish = this.addFish.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);
    this.loadSample = this.loadSample.bind(this);
    this.addOrder = this.addOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    const fishes = {...this.state.fishes}
    const timestamp = Date.now();

    fishes[`fish-${timestamp}`] = fish;
    this.setState({
      fishes
    })
  }

  updateFish(key, updatedFish) {
    const fishes = {...this.state.fishes};
    fishes[key] = updatedFish;
    this.setState ({
      fishes
    })

  }

  removeFish(key) {
    const fishes = {...this.state.fishes};
    delete fishes[key];
        this.setState ({
      fishes
    })
  }

  addOrder(key) {
    const order ={...this.state.order};
    order[key] = order[key]+1 || 1;
    this.setState({
      order  
    }) 
  }

  removeOrder(key) {
    const order ={...this.state.order}
    delete order[key];
    this.setState({
      order
    })
  }

  loadSample() {
    this.setState({
      fishes : sampleFish
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addOrder={this.addOrder} />)
            }
          </ul>
          

          
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} removeOrder= {this.removeOrder}/>
        <Inventory fishes={this.state.fishes} addFish={this.addFish} loadSample={this.loadSample } updateFish={this.updateFish} removeFish={this.removeFish}/>
      </div>
    )
  }
}

export default App;
