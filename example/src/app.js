import React, { Fragment } from 'react'
import { Notifications, useNotifications } from 'react-notifications'
import 'react-notifications/dist/index.css'
import { Container as Grid, Row, Col } from 'react-grid-system'

const ExampleButtons = () => {
  const { addNotification } = useNotifications()
  return (
    <Fragment>
      <h2>text</h2>

      <p>
        the value of the <code>text</code> property of the message object defines the text the show within the notification.
      </p>

      <br/>

      <Grid fluid>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <button onClick={ () => addNotification({ text: `this is important stuff!` }) }>notify me!</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
            {`<button onClick={ () => addNotification({ text: 'this is important stuff!' }) }>notify me!</button>`}
          </Col>
        </Row>
      </Grid>

      <h2>type</h2>

      <p>
        the <code>type</code> property of the message object determines the styling the notification receives.
        there are four notification types; <strong>info</strong> is the default.
      </p>

      <br/>

      <Grid fluid>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <h3>error</h3>
            <div>
              <button onClick={ () => addNotification({ type: 'error', text: 'this indicates an error.'}) }>notify me!</button>
            </div>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'error',
    text: 'this indicates an error.',
  })
}>notify me!</button>`}
          </Col>
        </Row>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <h3>info</h3>
            <div>
              <button onClick={ () => addNotification({ type: 'info', text: 'this indicates information.'}) }>notify me!</button>
            </div>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'info',
    text: 'this indicates information.',
  })
}>notify me!</button>`}
          </Col>
        </Row>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <h3>success</h3>
            <div>
              <button onClick={ () => addNotification({ type: 'success', text: 'this indicates success.'}) }>notify me!</button>
            </div>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'success',
    text: 'this indicates success.',
  })
}>notify me!</button>`}
          </Col>
        </Row>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <h3>warning</h3>
            <div>
              <button onClick={ () => addNotification({ type: 'warning', text: 'this indicates a warning.'}) }>notify me!</button>
            </div>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'warning',
    text: 'this indicates a warning.',
  })
}>notify me!</button>`}
          </Col>
        </Row>
      </Grid>

      <h2>autoClose</h2>

      <p>
        the value of the <code>autoClose</code> property of the message object determines whether the notification closes itself.
        the default value is <code>true</code>.
      </p>

      <br/>

      <Grid fluid>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <button onClick={ () => addNotification({ type: 'error', text: 'this must be closed manually.', autoClose: false }) }>notify me!</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'error',
    text: 'this must be closed manually.',
    autoClose: false,
  })
}>notify me!</button>`}
          </Col>
        </Row>
      </Grid>

      <h2>callbacks</h2>

      <p>
        the <code>onClick</code> property of the message object provides a callback that fires when the notification is clicked.
      </p>

      <br/>

      <Grid fluid>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <button onClick={ () => addNotification({ type: 'warning', text: 'you will be alerted upon click.', onClick: () => alert('clicked!') })}>notify me!</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'warning',
    text: 'you will be alerted upon click.',
    onClick: () => alert('clicked!'),
  })
}>notify me!</button>`}
          </Col>
        </Row>
      </Grid>

      <p>
        the <code>onClose</code> property of the message object provides a callback that fires when the notification closes.
      </p>

      <br/>

      <Grid fluid>
        <Row className="row">
          <Col xs={ 12 } lg={ 2 } className="column description">
            <button onClick={ () => addNotification({ type: 'success', text: 'you will be alerted upon closing.', onClose: () => alert('closed!'), }) }>notify me!</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 10 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'success',
    text: 'you will be alerted upon closing.',
    onClose: () => alert('closed!'),
  })
}>notify me!</button>`}
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
