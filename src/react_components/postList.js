var React = require('react');
var Post = require('./post');

module.exports = React.createClass({
   render: function() {
    var posts = this.props.posts.map(function(post) {
      var description = post.description.substring(0, 147) + "...";
      return(<Post identification={post.id} key={post.id} title={post.title} companyName={post.company_name} location={post.location}>{description}</Post>);
    });

    return(
      <div>
        <ul className='list-unstyled'>{posts}</ul>
      </div>
    );
  }
});
