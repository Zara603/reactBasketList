import React from 'react';
import { getFunName } from '../helpers';


export default class StorePicker extends React.Component {

  constructor(props) {
    super(props);
    this.goToStore = this.goToStore.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state ={value:''}
  }

  goToStore(e) {
    e.preventDefault();
    console.log('Hola', this.state.value);
    this.context.router.transitionTo(`/store/${this.state.value}`)
  }

  handleOnChange(e) {
    e.preventDefault();
    this.setState({
      value: e.target.value
    })

    console.log(this.state.value)
  }



  render() {
    return (
     <form className="store-selector" onSubmit={this.goToStore}>
       <h2>Please Enter A Store</h2>
       <input type="text" required placeholder="Store Name"  value={this.state.value} onChange={this.handleOnChange}/>
       <button type="submit">Visit Store →</button>
     </form>
    );
  }
}

  StorePicker.contextTypes = {
  router : React.PropTypes.object
}



