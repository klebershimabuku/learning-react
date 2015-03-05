var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var PostsPage = require('./postsPage');
var PostPage = require('./postPage');
var PostPage = require('./postPage');

var Inbox = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Inbox</h1>
      </div>
    );
  }
});

var Calendar = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Calendar</h1>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return(
      <div>
        <header>
          <ul>
            <li><Link to="posts">Posts</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
          Logged in as Kleber
        </header>

        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>

    <Route name="posts" handler={PostsPage}>
      <Route name="showpost" path=":postId" handler={PostPage}/>
      <DefaultRoute handler={PostPage}/>
    </Route>

    <Route name="inbox" handler={Inbox}/>
    <Route name="calendar" handler={Calendar}/>
    <DefaultRoute handler={PostsPage}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});


