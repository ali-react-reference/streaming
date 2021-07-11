import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form"; // Field is a component, redux form is a function
import { Form, Field } from "react-final-form";

class StreamCreate extends Component {
  renderInput = ({ input, label, meta }) => {
    // console.log(input);
    console.log(meta);
    const className = `field required ${meta.error && meta.touched ? "error" : ""}`;
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
  validate(formValues){
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
  };

  handleSubmit(formValues) {
    // an object with the values in each of the form fields
    console.log('handle submit called')
    console.log(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      // this.props.handle submit is called whenever the form is submitted, we give it our callback fn 'onSubmit'
      <Form
      onSubmit={this.handleSubmit}
      validate={this.validate}>
        {({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="ui form error"
          >
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

export default StreamCreate

// export default reduxForm({
// // name of the form depends on the form purpose
// form: "streamCreate",
//   validate, // connect the validate fn to redux form
// })(StreamCreate); // streamCreate is the key for all of the form values (from this component) in the redux store
