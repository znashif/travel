import React from "react";
import Header from "parts/Header";

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}
