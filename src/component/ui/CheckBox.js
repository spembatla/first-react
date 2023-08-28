import React, { Component } from "react";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };
  }
  
  handlechange(e) {
    const {checked} = e.target;

    this.setState({checked});
    this.props.onChange(checked);
  }

  render() {
    return (
        <input type='checkbox'
        checked={this.state.checked}
        onChange={this.handlechange.bind(this)}
        />
    );
  }
}

export default CheckBox;
