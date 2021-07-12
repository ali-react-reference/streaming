import React, { Component } from "react";
import { Form, Field } from "react-final-form";

class StreamForm extends Component {
  renderInput = ({ input, label, meta }) => {
    // console.log(input);
    // console.log(meta);
    const className = `field required ${
      meta.error && meta.touched ? "error" : ""
    }`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          {...input}
          // add all of the formProps.input key:value pairs as properties to the input element
          // it includes the formProps onChange function to save the input values to the redux store
          // and it gets the value from the redux store
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div>
          <div className="header">{error}</div>
        </div>
      );
      // only show the error if the form input is selected, then clicked out
    }
  }

  // run on render and each time anything in the form element changes
  validate(formValues) {
    // are the values valid?
    const errors = {};
    if (!formValues.title) {
      // the errors keys must match the names of the fields
      errors.title = "You must enter a title";
    }
    if (!formValues.description) {
      errors.description = "You must enter a description";
    }
    return errors;
  }

  render() {
    console.log(this.props.initialValues);
    return (
      <Form
        onSubmit={this.props.onSubmit}
        validate={this.validate}
        initialValues={this.props.initialValues?this.props.initialValues:{}}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="ui form error">
            {/* the Field component sets up automatic redux form action creators and reducers with the component */}
            {/* by itself, the 'Field' component doesn't know how to show an input */}
            {/* giving the Field a component, tells Field what to show */}
            <Field
              name="title"
              component={this.renderInput}
              label="Enter title"
            />
            <Field
              name="description"
              component={this.renderInput}
              label="Enter description"
            />
            <button className="ui button primary">Submit</button>
          </form>
        )}
      </Form>
    );
  }
}

export default StreamForm;
