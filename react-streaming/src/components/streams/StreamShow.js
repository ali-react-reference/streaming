import React, { Component, useEffect, useRef } from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { getStream } from "../../actions";

class StreamShow extends Component {
  constructor(props) {
    super(props);
    // get a ref to the video
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getStream(id);

    // try to handle streaming video on first render
    this.buildPlayer()

    return
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  componentDidUpdate(){
    // try to handle streaming video on first each update
    this.buildPlayer();
  }

  componentWillUnmount(){
    this.player.destroy()
  }

  buildPlayer(){
    const id = this.props.match.params.id;
    if(this.player||!this.props.stream){
      return
    }
      this.player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${id}.flv`,
      });
      this.player.attachMediaElement(this.videoRef.current);
      this.player.load();
  }

  renderStream() {
    if (this.props.stream) {
      return (
        <div>
          <video ref={this.videoRef} style={{ width: "100%" }} controls></video>
          <h1>{this.props.stream.title}</h1>
          <h5>{this.props.stream.description}</h5>
        </div>
      );
    }
    return <div>Loading...</div>;
  }

  render() {
    return <div>{this.renderStream()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getStream })(StreamShow);
