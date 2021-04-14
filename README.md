# react-notifications

> @mwatson/react-notifications

[![NPM](https://img.shields.io/npm/v/react-notifications.svg)](https://www.npmjs.com/package/react-notifications) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Documentation & Examples

[https://mbwatson.github.io/react-notifications](https://mbwatson.github.io/react-notifications) has details about the API and several examples. its code lives in the `example` directory.

## Install

```bash
npm install --save @mwatson/react-notifications
```

## Usage

import the `Notifications` component from `@mwatson/react-notifications`...


```jsx
// App.js
import { Notifications } from '@mwatson/react-notifications'
import 'react-notifications/dist/index.css'
```

...and wrap your application in the `Notifications` component, as it provides context to its descendants.

```jsx
<Notifications>
  <App />
</Notifications>
```

use the `useNotifications` hook to interact with the current notifications in your own components down your application tree.


```jsx
import { useNotifications } from 'react-notifications'

// ...

const Example = () => {
  const { addNotification } = useNotifications()
  return (
    <button onClick={
      addNotification({
        type: 'success',
        text: 'It worked!',
      })
    }>
      Click Me!
    </button>
  )
}
```

the `addNotifications` function takes a `message` object, which has the following shape.

```js
{
  type: 'error' | 'info' | 'success' | 'warning',
  text: String,
  autoClose: boolean, // optional. default: true
  onClick: function, // optional. default: null
  onClose: function, // optional. default: null
}
```

## License

MIT © [mbwatson](https://github.com/mbwatson)
