import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteStream, getStream } from "../../actions";
import { connect } from "react-redux";

import Modal from "../Modal";
import history from "../../history";

const StreamDelete = (props) => {
  useEffect(() => {
    props.getStream(props.match.params.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actions = () => {
    return (
      <React.Fragment>
        <button
        // arrow fn means that the function wont run on first render
          onClick={() => props.deleteStream(props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  const onDismiss = () => {
    history.push("/");
  };

  return (
    <Modal
      title="Delete Stream"
      content={`Are you sure you want to delete '${
        props.stream ? props.stream.title : ""
      }'?`}
      actions={actions()}
      onDismiss={() => onDismiss()}
    ></Modal>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteStream, getStream })(
  StreamDelete
);
