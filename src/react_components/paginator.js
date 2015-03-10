var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

  render: function() {
    var currentPage = parseInt(this.props.currentPage);
    var nextPage = currentPage + 1;
    var previousPage = currentPage - 1;

    return(
      <nav>
        <ul className="pager">
          <Link to="paginator" params={{ page: previousPage }}>Previous</Link>
          <Link to="paginator" params={{ page: nextPage }}>Next</Link>
        </ul>
      </nav>
    );
  }
});
