import React, { Fragment } from 'react'
import { Notifications, useNotifications } from 'react-notifications'
import 'react-notifications/dist/index.css'
import { Container as Grid, Row, Col } from 'react-grid-system'

const ExampleButtons = () => {
  const { addNotification } = useNotifications()
  return (
    <Fragment>
      <h2>types</h2>

      <p>
        there are four notification <em>types</em>: <strong>error</strong>, <strong>info</strong>, <strong>success</strong>, and <strong>warning</strong>.
      </p>

      <br/><br/>

      <Grid fluid>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <button onClick={ () => addNotification({ type: 'error', text: 'this indicates an error. i will close automatically.'}) }>notify</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'error',
    text: 'this indicates an error. i will close automatically.',
  })
}>notify</button>`}
          </Col>
        </Row>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <button onClick={ () => addNotification({ type: 'info', text: 'this indicates information. i will close automatically.'}) }>notify</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'info',
    text: 'this indicates information. i will close automatically.',
  })
}>notify</button>`}
          </Col>
        </Row>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <button onClick={ () => addNotification({ type: 'success', text: 'this indicates success. i will close automatically.'}) }>notify</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'success',
    text: 'this indicates success. i will close automatically.',
  })
}>notify</button>`}
          </Col>
        </Row>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <button onClick={ () => addNotification({ type: 'warning', text: 'this indicates a warning. i will close automatically.'}) }>notify</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'warning',
    text: 'this indicates a warning. i will close automatically.',
  })
}>notify</button>`}
          </Col>
        </Row>
      </Grid>

      <h2>auto-close</h2>

      <p>
        the value of the <code>autoClose</code> property of the message object determines whether the notification closes itself.
        the default value is <code>true</code>.
      </p>

      <br/><br/>

      <Grid fluid>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <button onClick={ () => addNotification({ type: 'error', text: 'this indicates an error. you must close me.', autoClose: false }) }>notify</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'error',
    text: 'this indicates an error. you must close me.',
    autoClose: false,
  })
}>notify</button>`}
          </Col>
        </Row>

      </Grid>

      <h2>callbacks</h2>

      <p>
        the <code>onClick</code> property of the message object provides a callback that fires when the notification is clicked.
      </p>

      <br/><br/>

      <Grid fluid>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <button onClick={ () => addNotification({ type: 'warning', text: 'i will alert on click.', onClick: () => alert('clicked!') })}>notify</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'warning',
    text: 'i will alert on click.',
    onClick: () => alert('clicked!'),
  })
}>notify</button>`}
          </Col>
        </Row>
      </Grid>

      <p>
        the <code>onClose</code> property of the message object provides a callback that fires when the notification closes.
      </p>

      <br/><br/>

      <Grid fluid>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <button onClick={ () => addNotification({ type: 'warning', text: 'i will alert on close.', onClose: () => alert('closed!'), }) }>notify</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'warning',
    text: 'i will alert on close.',
    onClick: () => alert('closed!'),
  })
}>notify</button>`}
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
