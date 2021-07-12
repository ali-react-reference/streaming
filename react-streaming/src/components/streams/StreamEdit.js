import _ from 'lodash'
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStream, updateStream } from "../../actions";
import StreamForm from "./StreamForm";

// every component must work in isolation

const StreamEdit = (props) => {
  useEffect(() => {
    const id = props.match.params.id;
    props.getStream(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendStream = (stream) => {
    console.log(stream)
    if (stream) {
      return _.pick(props.stream, 'title', 'description');
    } else {
      return null
    }
  };

  const handleSubmit = (formValues) => {
    // an object with the values in each of the form fields
    console.log("handle submit called");
    console.log(formValues);
    props.updateStream(props.match.params.id, formValues);
  };

  return (
    <div>
      <h3>Edit Stream</h3>
      <StreamForm
        onSubmit={handleSubmit}
        // gives all values as initial values to the form (including the user id)
        initialValues={sendStream(props.stream)}
      ></StreamForm>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, updateStream })(
  StreamEdit
);
