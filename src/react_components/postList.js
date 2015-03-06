var React = require('react');
var $ = require('jquery');
var Post = require('./post');
var Paginator = require('./paginator');
var Router = require('react-router');

module.exports = React.createClass({
  mixins: [Router.State],
  getInitialState: function() {
    return {
      posts: [],
      paginator: {},
      url: "http://staging.shigotodoko.com/posts.json",
      currentPage: this.getParams().page || 1
    };
  },

  loadPosts: function() {
    var url = this.state.url + "?page=" + this.state.currentPage;
    this.requestPostsByUrl(url);
  },

  componentDidMount: function() {
    this.loadPosts();
  },

  update: function(pageNum) {
    var url = this.state.url + '?page=' + pageNum;
    this.setState({currentPage: pageNum});
    this.requestPostsByUrl(url);
  },

  requestPostsByUrl: function(url) {
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(results) {
        this.setState({ posts: results.posts, paginator: results.paginator });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    var posts = this.state.posts.map(function(post) {
      var description = post.description.substring(0, 147) + "...";
      return(<Post identification={post.id} key={post.id} title={post.title} companyName={post.company_name} location={post.location}>{description}</Post>);
    });

    return(
      <div>
        <ul className='list-unstyled'>{posts}</ul>
        <Paginator paginate={this.update} paginator={this.state.paginator} currentPage={this.state.currentPage}/>
      </div>
    );
  }
});
