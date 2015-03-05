var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  mixins: [Router.State],
  render: function() {
    return(
      <div>
        <h1>PostPage</h1>
      </div>
    );
  }
});
