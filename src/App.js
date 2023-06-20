import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component{
  state = {
    clients: []
  };

  /**
   * We fetch our client API, we are using our proxy defined in package.json
   * "proxy": "http://localhost:8080",
   * @returns {Promise<void>}
   */
  async componentDidMount(){
    const response = await fetch('/clients');
    const body = await response.json();
    this.setState({clients: body});
  }
  render() {
    const {clients} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <div className="App-intro">
              <h2>Clients</h2>
              {clients.map(client =>
                <div key={client.id}>
                  {client.name} ({client.email})
                </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}

export default App;
