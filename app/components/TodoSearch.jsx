var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function(){
    var searchText = this.refs.searchText.value;
    var showCompleted = this.refs.showCompleted.checked;

    this.props.onSearch(showCompleted,searchText);
  },
  render: function(){
    return(
      <div className="container_header">
        <div><input type="text" ref="searchText" placeholder="Search Todo" onChange = {this.handleSearch} /></div>
        <div><label><input type="checkbox" ref="showCompleted" onChange = {this.handleSearch} />Show Completed</label></div>
      </div>
    );
    }
})

module.exports = TodoSearch;
