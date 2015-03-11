var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

  render: function() {
    var styles = {
      paginator: {
        textDecoration: "none",
        color: "#00a6d0",
        border: "1px solid #00a6d0",
        marginRight: "1px",
        padding: "0.3em 0.6em"
      }
    };

    var currentPage = parseInt(this.props.currentPage);
    var nextPage = currentPage + 1;
    var previousPage = currentPage - 1;

    return(
      <nav>
        <ul>
          <Link to="paginator" style={styles.paginator} params={{ page: previousPage }}>Página anterior</Link>
          <Link to="paginator" style={styles.paginator} params={{ page: nextPage }}>Próxima página</Link>
        </ul>
      </nav>
    );
  }
});
