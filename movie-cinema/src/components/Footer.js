import { Component } from "react";

// class component
class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &copy; 2024 Developed by {this.props.nama}</h3>
        <span>make with &#10084</span>
      </footer>
    );
  }
};

export  default Footer;