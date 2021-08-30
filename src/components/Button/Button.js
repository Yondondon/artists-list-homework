import { Component } from "react";

class Button extends Component {
  render() {
    const { handleClick, text } = this.props
    return (
      <button onClick={handleClick}>{text}</button>
    )
  }
}

export default Button