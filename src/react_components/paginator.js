var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      currentPage: 1,
      previousPage: 1,
      nextPage: 1
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
    var currentPage = this.props.currentPage;
    var nextPage = currentPage + 1;
    var previousPage = currentPage - 1;

    return(
      <nav>
        <ul className="pager">
          <Link to="paginator" onClick={this.loadPreviousPage} params={{ page: previousPage }}>Previous</Link>
          <Link to="paginator" onClick={this.loadNextPage} params={{ page: nextPage }}>Next</Link>
        </ul>
      </nav>
    );
  }
});
