var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// Load css
require('style!css!sass!ApplicationStyles')

ReactDOM.render(
     <p>React Boiler Plate</p>,
     document.getElementById('app')
   )
