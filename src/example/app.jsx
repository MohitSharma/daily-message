import React from 'react';
import DailyMessage from '../components/daily-message/index.jsx';

class App extends React.Component {
  render () {
    return (
      <DailyMessage customMessage="Welcome Mohit Sharma" customClass="welcome" />
    );
  }

}

React.render(
  <App />,
  document.getElementById('app')
);
