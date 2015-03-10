var React = require('react');
var App = require('./app');
var PostList = require('./postList');
var PostsPage = require('./postsPage');
var Post = require('./post');
var $ = require('jquery');
var Paginator = require('./paginator');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
  mixins: [Router.State],

  getInitialState: function() {
    var pageParams = this.getParams().page || 1;
    return { currentPage: pageParams, posts: [] };
  },

  componentWillReceiveProps: function() {
    var pageParams = this.getParams().page || 1;
    this.setState({currentPage: pageParams });

    this.loadPostsFromPage(pageParams);
  },

  componentDidMount: function() {
    this.loadPosts();
  },

  loadPosts: function() {
    var url = 'http://staging.shigotodoko.com/posts.json?page=' + this.state.currentPage;
    this.requestPostsByUrl(url);
  },

  loadPostsFromPage: function(pageNum) {
    var url = 'http://staging.shigotodoko.com/posts.json?page=' + pageNum;
    this.requestPostsByUrl(url);
  },

  requestPostsByUrl: function(url) {
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(results) {
        this.setState({ posts: results.posts });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    console.log('vou falar pro paginator e pro postlist que a pagina atual eh : ' + this.state.currentPage);

    return(
      <div>
        <h1>PostsPage</h1>
        <PostList posts={this.state.posts}/>
        <Paginator currentPage={this.state.currentPage}/>
        <RouteHandler/>
      </div>
    );
  }
});
