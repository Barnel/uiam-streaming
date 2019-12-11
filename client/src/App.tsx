import React from 'react';
import './App.css';
// @ts-ignore
import ReactHLS from 'react-hls'
class App extends React.Component<any, any> {
  render() {
    return (
        <ReactHLS url={"rtmp://192.168.56.101/live/stream"}/>
    );
  }
}

export default App;
