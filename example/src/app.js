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
          <h1>@mwatson/react-notifications</h1>
          <span className="header-links">
            <a href="https://www.npmjs.com/package/react-notifications" rel="noreferrer noopener" target="_blank">
              <svg version="1.1" viewBox="0 0 540 210" x="0px" y="0px" width="54px" height="21px" xmlns="http://www.w3.org/2000/svg">
                <path d="m150 195v-15h-150v-180h540v180h-270v30h-120zm90-30v-15h60v-120h-120v150h60zm0-75v-30h30v60h-30zm-150 15v-45h30v90h30v-120h-120v120h60zm300 0v-45h30v90h30v-90h30v90h30v-120h-180v120h60z" fill="#cb3837"/>
              </svg>
            </a>
            <a href="https://www.github.com/mbwatson/react-notifications" rel="noreferrer noopener" target="_blank">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" fill="#334">
                <path d="m11.999 0c-6.6266 0-11.999 5.5087-11.999 12.304 0 5.4361 3.4381 10.047 8.2069 11.675 0.60038 0.11263 0.81921-0.26737 0.81921-0.59365 0-0.29156-0.010431-1.0658-0.016706-2.0922-3.3379 0.74325-4.0422-1.6496-4.0422-1.6496-0.54588-1.4208-1.3327-1.7992-1.3327-1.7992-1.0896-0.76362 0.082492-0.7485 0.082492-0.7485 1.2045 0.08761 1.838 1.2682 1.838 1.2682 1.0704 1.88 2.809 1.3369 3.4926 1.0227 0.10901-0.79533 0.41843-1.3377 0.76176-1.6451-2.6646-0.31042-5.4663-1.3664-5.4663-6.0809 0-1.343 0.46779-2.4412 1.2354-3.3015-0.12383-0.31121-0.53556-1.562 0.11715-3.2562 0 0 1.0078-0.33082 3.3003 1.2614 0.95697-0.27266 1.9839-0.40936 3.0042-0.4139 1.0188 0.00416 2.0458 0.14132 3.0042 0.4139 2.2911-1.5922 3.2967-1.2614 3.2967-1.2614 0.65492 1.6942 0.24309 2.945 0.11924 3.2562 0.7691 0.8603 1.2339 1.9585 1.2339 3.3015 0 4.7267-2.806 5.7668-5.4795 6.0711 0.43094 0.37992 0.81479 1.1307 0.81479 2.2788 0 1.6443-0.01463 2.9714-0.01463 3.3747 0 0.32931 0.21584 0.71226 0.82511 0.59218 4.7648-1.6307 8.2001-6.2389 8.2001-11.673 0-6.7956-5.3733-12.304-12.001-12.304"/>
              </svg>
            </a>
          </span>
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
