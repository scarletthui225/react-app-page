import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
  }

  handleClearSearch(e) {
    this.props.onSearchTextChange('');
  }

  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="teal nav-wrapper white-text">
            <form>
              <div className="input-field">
                <input
                  id="search"
                  type="search"
                  onChange={this.handleSearchTextChange}
                  value={this.props.searchText}
                />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons" onClick={this.handleClearSearch}>
                  close
                </i>
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default SearchBar;
