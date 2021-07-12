import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStream } from "../../actions";

const StreamShow = (props) => {
  useEffect(() => {
    props.getStream(props.match.params.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderStream = () => {
    if (props.stream) {
      return (
        <div>
          <h1>{props.stream.title}</h1>
          <h5>{props.stream.description}</h5>
        </div>
      );
    }
    return <div>Loading...</div>;
  };

  return <div>{renderStream()}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getStream })(StreamShow);
