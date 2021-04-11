import React, { Fragment } from 'react'
import { Notifications, useNotifications } from 'react-notifications'
import 'react-notifications/dist/index.css'
import { Container as Grid, Row, Col } from 'react-grid-system'

const ExampleButtons = () => {
  const { addNotification } = useNotifications()
  return (
    <Fragment>
      <h2>self-closing (default)</h2>
      <p>these notifications will close by themselves but can be closed early by clicking them.</p>

      <button onClick={ () => addNotification({ type: 'error', text: 'this indicates error. i will close.'}) }>error</button>
      <button onClick={ () => addNotification({ type: 'info', text: 'this indicates info. i will close.'}) }>info</button>
      <button onClick={ () => addNotification({ type: 'success', text: 'this indicates success. i will close.'}) }>success</button>
      <button onClick={ () => addNotification({ type: 'warning', text: 'this indicates warning. i will close.'}) }>warning</button>

      <pre>{`
<button onClick={ () => addNotification({ type: 'error', text: 'this indicates error. i will close.'}) }>error</button>
<button onClick={ () => addNotification({ type: 'info', text: 'this indicates info. i will close.'}) }>info</button>
<button onClick={ () => addNotification({ type: 'success', text: 'this indicates success. i will close.'}) }>success</button>
<button onClick={ () => addNotification({ type: 'warning', text: 'this indicates warning. i will close.'}) }>warning</button>
      `}</pre>

      <h2>manual close</h2>
      <p>these notifications need to be closed manually by clicking them.</p>

      <button onClick={ () => addNotification({ type: 'error', text: 'this indicates error. you must close me.', autoClose: false }) }>error</button>
      <button onClick={ () => addNotification({ type: 'info', text: 'this indicates info. you must close me.', autoClose: false }) }>info</button>
      <button onClick={ () => addNotification({ type: 'success', text: 'this indicates success. you must close me.', autoClose: false }) }>success</button>
      <button onClick={ () => addNotification({ type: 'warning', text: 'this indicates warning. you must close me.', autoClose: false }) }>warning</button>

      <pre>{`
<button onClick={ () => addNotification({ type: 'error', text: 'this indicates error. you must close me.', autoClose: false }) }>error</button>
<button onClick={ () => addNotification({ type: 'info', text: 'this indicates info. you must close me.', autoClose: false }) }>info</button>
<button onClick={ () => addNotification({ type: 'success', text: 'this indicates success. you must close me.', autoClose: false }) }>success</button>
<button onClick={ () => addNotification({ type: 'warning', text: 'this indicates warning. you must close me.', autoClose: false }) }>warning</button>
      `}</pre>

      <h2>with callbacks</h2>
      <p>the <code>onClose</code> callback prop will fire on close</p>

      <Grid fluid>
        <Row className="row">
          <Col xs={ 12 } lg={ 6 } className="column description">
            <button onClick={ () => addNotification({ type: 'warning', text: 'i will alert on click.', onClick: () => alert('clicked!') })}>warning, alert on click</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 6 }>
{`<button className="rhs"n
  onClick={
    () => addNotification({
      type: 'warning',
      text: 'i will alert on click.',
      onClick: () => alert('clicked!'),
  })
}>warning, alert on click</button>`}
          </Col>
        </Row>
        <Row className="row">
          <Col xs={ 12 } lg={ 6 } className="column description">
            <button onClick={
              () => addNotification({
                type: 'warning',
                text: 'i will alert on click and close.',
                onClick: () => alert('clicked!'),
                onClose: () => alert('closed!'),
              })
            }>warning, alert on click and close</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 6 } className="column code">
{`<button onClick={
    () => addNotification({
      type: 'warning',
      text: 'i will alert on close.',
      onClose: () => alert('closed!'),
    })
  }>warning, alert on close</button>`}
          </Col>
        </Row>
        <Row className="row">
          <Col xs={ 12 } lg={ 6 } className="column description">
              <button onClick={
                () => addNotification({
                  type: 'warning',
                  text: 'i will alert on close.',
                  onClose: () => alert('closed!'),
                })
              }>warning, alert on close</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 6 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'warning',
    text: 'i will alert on click and close.',
    onClick: () => alert('clicked!'),
    onClose: () => alert('closed!'),
  })
}>warning, alert on click and close</button>`}
          </Col>
        </Row>
      </Grid>

      
    </Fragment>
  )
}

const App = ({ children }) => {
  return (
    <Fragment>
      <Notifications>
        <header>
          <h1>Notifications</h1>
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
