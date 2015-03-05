var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {
    var styles = {
      companyName: {
        float: "left",
        fontWeight: "bold"
      },
      location: {
      },
    };

    return(
      <li>
        <h2 className="title">
          <Link to="showpost" params={{ postId: this.props.identification }}>{this.props.title}</Link>
        </h2>
        <div>
          <span style={styles.companyName}>{this.props.companyName}</span>
          &nbsp;-&nbsp;
          <span style={styles.location}>{this.props.location}</span>
        </div>
        {this.props.children}
      </li>
    );
  }
});
