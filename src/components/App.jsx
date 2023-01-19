import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <ToastContainer autoClose={3000}/>
        <Searchbar onSubmit={this.handleFormSubmit} />
        
      </div>
    );
  }
}

export default App;
