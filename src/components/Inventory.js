import React from 'react';
import FishForm from './AddFishForm'


export default class Inventory extends React.Component {


  constructor(props) {
    super(props);
    this.renderFishList = this.renderFishList.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, key) {
  	const fish = this.props.fishes[key];
  	const updatedFish ={...fish, 
  						[e.target.name]:e.target.value}

  	this.props.updateFish(key, updatedFish)					
  	
  }

  renderFishList(key) {
  	const fish = this.props.fishes[key];

  	return (
  		<div className="fish-edit" key={key}>
  			<input type="text" name="name" value={fish.name} placeholder="Fish Name" onChange={(e) => this.handleChange(e, key)}/>
  			<input type="text" name="price" value={fish.price} placeholder="Fish Name" onChange={(e) => this.handleChange(e, key)}/>
  			<select type="text" name="status" value={fish.status} placeholder="Fish Status" onChange={(e) => this.handleChange(e, key)} >
  			  <option value="available">Fresh!</option>
  			  <option value="unavailable">Sold Out!</option>
  			</select>
  			<textarea type="text" name="desc" value={fish.desc} placeholder="Fish Desc" onChange={(e) => this.handleChange(e, key)}/>
  			<input type="text" name="image url" value={fish.imageUrl} placeholder="Fish Image URL" onChange={(e) => this.handleChange(e, key)}/>
			<button onClick={() => this.props.removeFish(key)}>Remove the Fish</button>

  		</div>	
  	)
  }
  render() {
  	const fishList = Object.keys(this.props.fishes)
    return (
 	 <div>
	   	<p>Inventory</p>
		{ fishList.map(this.renderFishList) }
	   	<FishForm addFish={this.props.addFish} buttonText='+ Add a Fish'/>

	   	<button onClick={this.props.loadSample} >Load Sample Fish</button>
 	 </div>		

    );
  }
}

