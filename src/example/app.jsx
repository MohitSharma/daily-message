import React from 'react';
import ReactDOM from 'react-dom';
import DailyMessage from '../components/daily-message/index.jsx';

class App extends React.Component {
  render () {
    return (
      <DailyMessage customMessage="Welcome Mohit Sharma" customClass="welcome" />
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
