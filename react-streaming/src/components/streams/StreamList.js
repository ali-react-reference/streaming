import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStreams } from "../../actions";
import { Link } from 'react-router-dom'

const StreamList = (props) => {
  useEffect(() => {
    // for getting the streams when the component first renders
    props.getStreams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // conditionally show the edit and delete if the user id matches the user id for the stream
  const renderAdmin = (stream) => {
    if (stream.userId === props.currentUserId) {
      return (
        <div className="right floated content">
        {/* pass in the specific id to the url link */}
          <Link to={`streams/edit/${stream.id}`} className="ui primary button">Edit</Link>
          <Link to={`streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      );
    }
  };

  const renderCreateStream = () => {
    if (props.isSignedIn) {
      return (
        <div className="right floated content" style={{textAlign: 'right'}}>
          <Link to='/streams/new' className="ui primary button">Create Stream</Link>
        </div>
      );
    }
  };

  const renderList = () => {
    return props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {renderAdmin(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">{stream.title}</div>
          <div className="description">{stream.description}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      {renderCreateStream()}
    </div>
  );
};

const mapDispatchToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId, // obj to array fn
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapDispatchToProps, { getStreams })(StreamList);
