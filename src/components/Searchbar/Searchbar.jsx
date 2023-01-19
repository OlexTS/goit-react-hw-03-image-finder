import { Component } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from "react-icons/fc";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchImage, SearchForm, SearchFormBtn, ButtonLabel, SearchInput } from './Searchbar.styled';

class Searchbar extends Component {
    static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    };
    
  state = {
    query: '',
  };

      
  handleChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.query.trim() === '') {
            toast.error('Please enter a valid value')
            return
        }
            toast.success('Great')
        this.props.onSubmit(this.state.query)
        this.setState({query: ''})

    }

  render() {
    return (
      <SearchImage>
        <SearchForm onSubmit={this.handleSubmit} >
          <SearchFormBtn type="submit" ><FcSearch size={30}/>
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormBtn>

          <SearchInput
            onChange={this.handleChange}
            class="input"
                    type="text"
                    value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchImage>
    );
  }
}

export default Searchbar;
