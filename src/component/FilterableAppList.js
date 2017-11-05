import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AppList from './AppList';
import AppTopGrossingList from './AppTopGrossingList';
import 'whatwg-fetch';

class FilterableAppList extends Component {
  //get data from api
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      grossingList: [],
      appList: []
    };
  }

  //get data before mounting
  componentWillMount() {
    //grossing list
    fetch(
      'https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json'
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json.feed.entry);
        this.setState({ grossingList: json.feed.entry });
      })
      .catch(function(ex) {
        console.log('parsing failed', ex);
      });

    //app list
    fetch('https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json')
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log('parsed json', json);
        this.setState({ appList: json.feed.entry });
      })
      .catch(function(ex) {
        console.log('parsing failed', ex);
      });
  }

  //render the face of full app
  render() {
    return (
      <div className="wrapper">
        <SearchBar />
        <div className="container">
          <AppTopGrossingList grossingList={this.state.grossingList} />
          <AppList appList={this.state.appList} />
        </div>
      </div>
    );
  }
}

export default FilterableAppList;
