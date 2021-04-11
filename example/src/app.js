import React, { Fragment } from 'react'
import { Notifications, useNotifications } from 'react-notifications'
import 'react-notifications/dist/index.css'

const ExampleButtons = () => {
  const { addNotification } = useNotifications()
  return (
    <Fragment>
      <h2>self-closing (default)</h2>
      <p>these notifications will close by themselves but can be closed early by clicking them.</p>
      <button onClick={ () => addNotification({ type: 'error', text: 'this indicates error. i will close.'}) }>
        ERROR
      </button>
      <button onClick={ () => addNotification({ type: 'info', text: 'this indicates info. i will close.'}) }>
        INFO
      </button>
      <button onClick={ () => addNotification({ type: 'success', text: 'this indicates success. i will close.'}) }>
        SUCCESS
      </button>
      <button onClick={ () => addNotification({ type: 'warning', text: 'this indicates warning. i will close.'}) }>
        WARNING
      </button>

      <h2>manual close</h2>
      <p>these notifications need to be closed manually by clicking them.</p>
      <button onClick={ () => addNotification({ type: 'error', text: 'this indicates error. you must close me.', autoClose: false }) }>
        ERROR
      </button>
      <button onClick={ () => addNotification({ type: 'info', text: 'this indicates info. you must close me.', autoClose: false }) }>
        INFO
      </button>
      <button onClick={ () => addNotification({ type: 'success', text: 'this indicates success. you must close me.', autoClose: false }) }>
        SUCCESS
      </button>
      <button onClick={ () => addNotification({ type: 'warning', text: 'this indicates warning. you must close me.', autoClose: false }) }>
        WARNING
      </button>
      
    </Fragment>
  )
}

const App = ({ children }) => {
  return (
    <Fragment>
      <Notifications>
        <header>
          Notifications Gallery
        </header>
        <main>
          <ExampleButtons />
        </main>
        <footer>
          :)
        </footer>
      </Notifications>
    </Fragment>
  )
}

export default App
