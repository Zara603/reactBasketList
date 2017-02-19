import React from 'react';
import { formatPrice } from '../helpers';


export default class Fish extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
	const {details, index} = this.props
	const isAvailable = details.status === 'available'
	const buttonText = isAvailable ? 'Add to Order' : 'Sold Out'
    return (
      <div>
      <li className="menu-fish">
      	<h3 className="fish-name">
      	  {details.name}
      	  <span className="price">{formatPrice(details.price)}</span>
      	</h3>
      	<img src={details.image} />
      	<p>{details.desc}</p>
      	<button disabled={!isAvailable} onClick= {() => {this.props.addOrder(index)}} >{buttonText}</button>
      </li>


      </div>
    );
  }
}
