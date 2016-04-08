# Daily Message
Messages based on time of day (Good Morning, Good Afternoon and Good Night)

## Install

```sh
npm install daily-message --save
```

## Technical details

- Code Written in ES6 and transpiled down to ES5.

## Example: 

```javascript

import React from 'react';
import DailyMessage from 'daily-message';

const YourComponent = React.createClass({
  render() {
    return (
      <DailyMessage customMessage="Your Custom Message Here (Don't add this if you don't need any message) " customClass="Custom Class Name (Optional)"/>
    );
  }

});

export default YourComponent;
```

## Development

```sh
npm install
npm run build
npm run dev-server
```


## Future Development

- Multi Language Support