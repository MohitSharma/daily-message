import React from 'react';
import DailyMessage from '../components/daily-message/index.jsx';

const App = React.createClass({
  render () {
    return (
      <DailyMessage customMessage="Welcome Mohit Sharma" customClass="welcome" />
    );
  }

});

React.render(
  <App />,
  document.getElementById('app')
);
