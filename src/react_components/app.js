var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var PostsPage = require('./postsPage');
var PostPage = require('./postPage');

var NewPostPage = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Novo Anúncio</h1>
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
            <li><Link to="posts">Anúncios</Link></li>
            <li><Link to="sendPost">Enviar Anúncio</Link></li>
          </ul>
        </header>

        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>

    <Route name="posts" handler={PostsPage}/>
    <Route name="showpost" path="/posts/:postId" handler={PostPage}/>
    <Route name="paginator" path="/posts/page/:page" handler={PostsPage}/>

    <Route name="sendPost" handler={NewPostPage}/>

    <DefaultRoute handler={PostsPage}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});


