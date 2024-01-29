import "./MainImg1Styles.css";
import React, {Component} from "react";

class MainImg1 extends Component {
  render() {
    return (
      <div className="Main-Img">
        <div className="Heading">
          <h1>{this.props.Heading}</h1>
          <p>{this.props.Text}</p>
        </div>
      </div>
    );
  }
}

export default MainImg1;
