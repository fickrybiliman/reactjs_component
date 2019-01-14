import React, { Component } from 'react';
import Paragraph from './components/Paragraph';
import Title from './components/Title';

class App extends Component {
  constructor() {
    super()
    this.state = {
      angka1: 0,
      angka2: 0,
      hasil: 0
    }
  }

  _handleClick = () => {
    const perhitungan = Number(this.state.angka1) + Number(this.state.angka2)
    this.setState({hasil: perhitungan})
  }

  _handleChangeAngka1 = (element) => {
    this.setState({ angka1: element.target.value })
  }

  _handleChangeAngka2 = (element) => {
    this.setState({ angka2: element.target.value })
  }

  _handleChange = (element) => {
    this.setState({ [element.target.name]: element.target.value })
  }

  render() {
    return (
      <div>
        <Title/>
        <Paragraph></Paragraph>
        <input 
          name = 'angka1'
          onChange = {this._handleChange}
          value = { this.state.angka1 } 
        />
        <input 
          name = 'angka2'
          onChange = { this._handleChange}
          value = { this.state.angka2 }
        />
        <button onClick = {this._handleClick } >HITUNG</button>
        <h1>Hasil : { this.state.hasil }</h1>
      </div>
    );
  }
}

export default App;
