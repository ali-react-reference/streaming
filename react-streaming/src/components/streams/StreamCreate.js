import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  handleSubmit = (formValues) => {
    // an object with the values in each of the form fields
    this.props.createStream(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.handleSubmit} />
      </div>
      // this.props.handle submit is called whenever the form is submitted, we give it our callback fn 'onSubmit'
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
