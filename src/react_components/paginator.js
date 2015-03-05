var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      currentPage: 1
    }
  },

  loadPreviousPage: function() {
    console.log("loading previous page..");
    var previousPage = this.props.paginator.current_page - 1;
    this.props.paginate(previousPage);
  },

  loadNextPage: function() {
    console.log("loading next page..");
    var currentPage = (this.props.paginator.current_page == 0) ? 1 : this.props.paginator.current_page;
    var nextPage = currentPage + 1;
    this.props.paginate(nextPage);
  },

  render: function() {
    var nextPage = this.state.currentPage + 1;
    var previousPage = this.state.currentPage - 1;

    return(
      <nav>
        <ul className="pager">
        <li><a href="#" onClick={this.loadPreviousPage}>Previous</a></li>
        <li><a href="#" onClick={this.loadNextPage}>Next</a></li>
        </ul>
      </nav>
    );
  }
});
