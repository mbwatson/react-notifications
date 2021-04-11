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

      <Grid fluid>
        <Row className="row">
          <Col xs={ 12 } lg={ 4 } className="column description">
            <button onClick={ () => addNotification({ type: 'error', text: 'this indicates error. i will close.'}) }>error</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 8 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'error',
    text: 'this indicates error. i will close.',
  })
}>error</button>`}
          </Col>
        </Row>
        <Row className="row">
          <Col xs={ 12 } lg={ 4 } className="column description">
            <button onClick={ () => addNotification({ type: 'info', text: 'this indicates info. i will close.'}) }>info</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 8 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'info',
    text: 'this indicates info. i will close.',
  })
}>info</button>`}
          </Col>
        </Row>
        <Row className="row">
          <Col xs={ 12 } lg={ 4 } className="column description">
            <button onClick={ () => addNotification({ type: 'success', text: 'this indicates success. i will close.'}) }>success</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 8 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'success',
    text: 'this indicates success. i will close.',
  })
}>success</button>`}
          </Col>
        </Row>
        <Row className="row">
          <Col xs={ 12 } lg={ 4 } className="column description">
            <button onClick={ () => addNotification({ type: 'warning', text: 'this indicates warning. i will close.'}) }>warning</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 8 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'warning',
    text: 'this indicates warning. i will close.',
  })
}>warning</button>`}
          </Col>
        </Row>
      </Grid>

      <h2>manual close</h2>
      <p>these notifications need to be closed manually by clicking them.</p>

      <Grid fluid>
        <Row className="row">
          <Col xs={ 12 } lg={ 4 } className="column description">
            <button onClick={ () => addNotification({ type: 'error', text: 'this indicates error. you must close me.', autoClose: false }) }>error</button>
          </Col>
          <Col component="pre" xs={ 4 } lg={ 8 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'error',
    text: 'this indicates error. you must close me.',
    autoClose: false,
  })
}>error</button>`}
          </Col>
        </Row>

        <Row className="row">
          <Col xs={ 12 } lg={ 4 } className="column description">
            <button onClick={ () => addNotification({ type: 'info', text: 'this indicates info. you must close me.', autoClose: false }) }>info</button>
          </Col>
          <Col component="pre" xs={ 4 } lg={ 8 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'info',
    text: 'this indicates info. you must close me.',
    autoClose: false,
  })
}>info</button>`}
          </Col>
        </Row>

        <Row className="row">
          <Col xs={ 12 } lg={ 4 } className="column description">
            <button onClick={ () => addNotification({ type: 'success', text: 'this indicates success. you must close me.', autoClose: false }) }>success</button>
          </Col>
          <Col component="pre" xs={ 4 } lg={ 8 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'success',
    text: 'this indicates success. you must close me.',
    autoClose: false,
  })
}>success</button>`}
          </Col>
        </Row>

        <Row className="row">
          <Col xs={ 12 } lg={ 4 } className="column description">
            <button onClick={ () => addNotification({ type: 'warning', text: 'this indicates warning. you must close me.', autoClose: false }) }>warning</button>
          </Col>
          <Col component="pre" xs={ 4 } lg={ 8 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'warning',
    text: 'this indicates warning. you must close me.',
    autoClose: false,
  })
}>warning</button>`}
          </Col>
        </Row>
      </Grid>

      <h2>with callbacks</h2>
      <p>the <code>onClick</code> and <code>onClose</code> props provide callbacks that fire when the notification is clicked and when it closes.</p>

      <Grid fluid>
        <Row className="row">
          <Col xs={ 12 } lg={ 4 } className="column description">
            <button onClick={ () => addNotification({ type: 'warning', text: 'i will alert on click.', onClick: () => alert('clicked!') })}>warning, alert on click</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 8 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'warning',
    text: 'i will alert on click.',
    onClick: () => alert('clicked!'),
  })
}>warning, alert on click</button>`}
          </Col>
        </Row>
        <Row className="row">
          <Col xs={ 12 } lg={ 4 } className="column description">
            <button onClick={ () => addNotification({ type: 'warning', text: 'i will alert on close.', onClose: () => alert('closed!'), }) }>warning, alert on close</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 8 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'warning',
    text: 'i will alert on close.',
    onClick: () => alert('closed!'),
  })
}>warning, alert on lose</button>`}
          </Col>
        </Row>
        <Row className="row">
          <Col xs={ 12 } lg={ 4 } className="column description">
            <button onClick={ () => addNotification({ type: 'warning', text: 'i will alert on click and on close.', onClick: () => alert('clicked!'), onClose: () => alert('closed!'), }) }>warning, alert on click & on close</button>
          </Col>
          <Col component="pre" xs={ 12 } lg={ 8 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'warning',
    text: 'i will alert on click and on close.',
    onClick: () => alert('clicked!'),
    onClose: () => alert('closed!'),
  })
}>warning, alert on click and on close</button>`}
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
