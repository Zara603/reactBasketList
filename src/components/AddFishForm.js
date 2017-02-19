import React from 'react';

export default class AddFishForm extends React.Component {

  constructor(props) {
    super(props);
    this.makeFish=this.makeFish.bind(this)
  }

  makeFish(e) {
    e.preventDefault();
    const fish = {
      name: this.inputName.value, 
      price: this.inputPrice.value,
      status: this.inputStatus.value,
      desc: this.inputDescription.value,
      imageUrl: this.inputImageUrl.value
    }

    this.props.addFish(fish)
  }

  render() {
    return (
      <div>
        <form className="fish-edit" onSubmit={this.makeFish}>
          <input type="text" placeholder="Fish Name" ref={(input) => {this.inputName=input}}/>
          <input type="text" placeholder="Fish Price" ref={(input) => {this.inputPrice = input}}/>
          <select ref={(input) => {this.inputStatus = input}}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold out!</option>
          </select>
          <textarea placeholder="Description" ref={(input) => {this.inputDescription=input}}></textarea>
          <input type="text" placeholder="Fish Image Url" ref={(input) => {this.inputImageUrl=input}}/>
          <button>{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}