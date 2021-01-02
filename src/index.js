import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const App = () => {

//   return <div>Hi There!</div>;
// };
class App extends React.Component {
  // constructor(props) {
  //   super(props); //For the Component Class functionality and props

  //   /* State Initialization during Component Creation */
  //   this.state = { lat: null, errorMessage: "" };
  // }

  /* Another way of state initialisation except constructor */
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    /* We need location just one time*/
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message = "Please Accept Location Request"/>
  }

  render() {
    return <div>
      {this.renderContent()}
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
