import React from 'react';
import './App.css';

class App extends React.Component<any, any> {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
        <div className="App">
          <p className="App-intro">{this.state.data}</p>
          <video id="videoPlayer" controls>
            <source src="http://localhost:3001/video" type="video/mp4"/>
          </video>
        </div>
    );
  }
}

export default App;
