var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({displayName: "App",
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("header", null, 
          React.createElement("ul", null, 
            React.createElement("li", null, React.createElement(Link, {to: "app"}, "Dashboard")), 
            React.createElement("li", null, React.createElement(Link, {to: "inbox"}, "Inbox")), 
            React.createElement("li", null, React.createElement(Link, {to: "calendar"}, "Calendar"))
          ), 
          "Logged in as Kleber"
        ), 

        React.createElement(RouteHandler, null)
      )
    );
  }
});

var routes = (
  React.createElement(Route, {name: "app", path: "/", handler: App}, 
    React.createElement(Route, {name: "inbox", handler: Inbox}), 
    React.createElement(Route, {name: "calendar", handler: Calendar}), 
    React.createElement(DefaultRoute, {handler: Dashboard})
  )
);

Router.run(routes, function(Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
