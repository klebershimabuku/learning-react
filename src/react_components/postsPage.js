var React = require('react');
var App = require('./app');
var PostList = require('./postList');
var PostsPage = require('./postsPage');
var Post = require('./post');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
  render: function() {
    return(
      <div>
        <h1>PostsPage</h1>
        <PostList/>
        <RouteHandler/>
      </div>
    );
  }
});

var PostsStats = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Posts Stats</h1>
      </div>
    );
  }
});
