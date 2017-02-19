import React from 'react';
import {formatPrice} from '../helpers'; 

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key) {
  	const fish = this.props.fishes[key]
  	const count = this.props.order[key]
  	const removeButton = <button onClick={() => this.props.removeOrder(key)}>&times;</button>

    if(!fish || fish.status === 'unavailable') {
      return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available!{removeButton}</li>
    }
    
  	return (
  		<li key={key}>
  			<span><strong>g</strong>{count*100}{removeButton}</span>
  			<span>{fish.name}</span>
  			<span className="price">{formatPrice(count *fish.price)}</span>
  		</li>
  		)
  } 				
  render() {
  	const orderList = Object.keys(this.props.order);
  	const total = orderList.reduce((prev, key) => {
  		const fish = this.props.fishes[key]
  		const count = this.props.order[key]
  		const isAvailable = fish && fish.status === 'available'

  		if (isAvailable) {
  			return prev + (count * fish.price)
  		}
  	}, 0)


    return (
      <div className="order-wrap">
      	<h2>Your Order</h2>
      	<ul className="order">
      		<li className="total">
				<strong>total</strong>
				{formatPrice(total)}

      		</li>
      		{orderList.map(this.renderOrder)}
      	</ul>

      </div>
    )
  }
}

export default Order;
