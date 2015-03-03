var Footer = require('./Footer.jsx');
var Header = require('./Header.jsx');
var MainSection = require('./MainSection.jsx');
var React = require('react');

module.exports = React.createClass({

  componentDidMount: function() {

  },

  componentWillUnmount: function() {

  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <Header />
        <MainSection />
        <Footer />
      </div>
    );
  }
});
