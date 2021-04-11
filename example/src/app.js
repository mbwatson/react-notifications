import React, { Fragment } from 'react'
import { Notifications, useNotifications } from 'react-notifications'
import 'react-notifications/dist/index.css'

const FlexGroup = ({ children }) => (
  <div className="flex-group">
    { children }
  </div>
)

const ExampleButtons = () => {
  const { addNotification } = useNotifications()
  return (
    <Fragment>
      <h2>self-closing (default)</h2>
      <p>these notifications will close by themselves but can be closed early by clicking them.</p>
      <FlexGroup>
        <button onClick={ () => addNotification({ type: 'error', text: 'this indicates error. i will close.'}) }>error</button>
        <button onClick={ () => addNotification({ type: 'info', text: 'this indicates info. i will close.'}) }>info</button>
        <button onClick={ () => addNotification({ type: 'success', text: 'this indicates success. i will close.'}) }>success</button>
        <button onClick={ () => addNotification({ type: 'warning', text: 'this indicates warning. i will close.'}) }>warning</button>
      </FlexGroup>
      <pre>{`
<button onClick={ () => addNotification({ type: 'error', text: 'this indicates error. i will close.'}) }>error</button>
<button onClick={ () => addNotification({ type: 'info', text: 'this indicates info. i will close.'}) }>info</button>
<button onClick={ () => addNotification({ type: 'success', text: 'this indicates success. i will close.'}) }>success</button>
<button onClick={ () => addNotification({ type: 'warning', text: 'this indicates warning. i will close.'}) }>warning</button>
      `}</pre>

      <h2>manual close</h2>
      <p>these notifications need to be closed manually by clicking them.</p>
      <FlexGroup>
        <button onClick={ () => addNotification({ type: 'error', text: 'this indicates error. you must close me.', autoClose: false }) }>error</button>
        <button onClick={ () => addNotification({ type: 'info', text: 'this indicates info. you must close me.', autoClose: false }) }>info</button>
        <button onClick={ () => addNotification({ type: 'success', text: 'this indicates success. you must close me.', autoClose: false }) }>success</button>
        <button onClick={ () => addNotification({ type: 'warning', text: 'this indicates warning. you must close me.', autoClose: false }) }>warning</button>
      </FlexGroup>
      <pre>{`
<button onClick={ () => addNotification({ type: 'error', text: 'this indicates error. you must close me.', autoClose: false }) }>error</button>
<button onClick={ () => addNotification({ type: 'info', text: 'this indicates info. you must close me.', autoClose: false }) }>info</button>
<button onClick={ () => addNotification({ type: 'success', text: 'this indicates success. you must close me.', autoClose: false }) }>success</button>
<button onClick={ () => addNotification({ type: 'warning', text: 'this indicates warning. you must close me.', autoClose: false }) }>warning</button>
      `}</pre>

      <h2>with a closing callback</h2>
      <p>the <code>onClose</code> callback prop will fire on close</p>
      <FlexGroup>
        <button onClick={
          () => addNotification({
            type: 'warning',
            text: 'i will alert on close.',
            onClose: () => alert('closed!'),
          })
        }>alerting warning</button>
      </FlexGroup>
      <pre>{`
<button onClick={
  () => addNotification({
    type: 'warning',
    text: 'i will alert on close.',
    onClose: () => alert('closed!'),
  })
}>alerting warning</button>
      `}</pre>
      
    </Fragment>
  )
}

const App = ({ children }) => {
  return (
    <Fragment>
      <Notifications>
        <header>
          Notifications
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
