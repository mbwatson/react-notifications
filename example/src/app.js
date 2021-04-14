import React, { Fragment } from 'react'
import { Notifications, useNotifications } from 'react-notifications'
import 'react-notifications/dist/index.css'
import { Container as Grid, Row, Col } from 'react-grid-system'

const ExampleButtons = () => {
  const { addNotification } = useNotifications()
  return (
    <Fragment>

      <section>
        <h2>usage, at a glance</h2>
        
        <Grid fluid className="grid">
          <Row className="row" gutterWidth={ 64 }>
            <Col sm={ 12 } md={ 4 } className="column description">
              <h5>install</h5>
            </Col>
            <Col component="pre" sm={ 12 } md={ 8 } xl={ 6 } className="column code">
              {`npm i @mwatson/react-notifications`}
            </Col>
          </Row>
          <Row className="row" gutterWidth={ 64 }>
            <Col sm={ 12 } md={ 4 } className="column description">
              <h5>import</h5>
            </Col>
            <Col component="pre" sm={ 12 } md={ 8 } xl={ 6 } className="column code">
{`import { Notifications } from '@mwatson/react-notifications
import 'react-notifications/dist/index.css'`}
            </Col>
          </Row>
          <Row className="row" gutterWidth={ 64 }>
            <Col sm={ 12 } md={ 4 } className="column description">
              <h5>implement</h5>
              <button onClick={ () => addNotification({ text: `this is important stuff!` }) }>notify me!</button>
            </Col>
            <Col component="pre" sm={ 12 } md={ 8 } xl={ 6 } className="column code">
{`const handleExample = () => {
  addNotification({ text: 'this is important stuff!' })
}

<button onClick={ handleExample }>notify me!</button>`}
            </Col>
          </Row>
        </Grid>
      </section>

      <section>
        <h2>the <code>message</code> prop</h2>

        <Grid fluid className="grid">
          <Row className="row" gutterWidth={ 64 }>
            <Col xs={ 12 } className="column">the <code>{`<Notification />`}</code> component receives a single prop, <code>message</code>, </Col>
            <Col component="pre" xs={ 12 } className="column code">{`<Notification message={ message } />`}</Col>
            <Col component="p" xs={ 12 } className="column">which it expects to be an object of the following shape.</Col>
            <Col component="pre" xs={ 12 } className="column code">{`{
  text: String,
  type: String ('error', 'info', 'success', 'warning')       default: 'info'
  autoClose: Boolean,                                        default: true
  onClick: Function                                          default: null
  onClose: Function                                          default: null
}`}</Col>
          </Row>
        </Grid>

        <p>
          notice that <code>text</code> is the only one required property.
        </p>

        <h4><code>message.text</code></h4>

        <p>
          this is the text to show in the notification. text is all that is supported.
        </p>

        <Grid fluid className="grid">
          <Row className="row" gutterWidth={ 64 }>
            <Col sm={ 12 } md={ 4 } className="column description">
              <button onClick={ () => addNotification({ text: `this is important stuff!` }) }>notify me!</button>
            </Col>
            <Col component="pre" sm={ 12 } md={ 8 } xl={ 6 } className="column code">
{`<button onClick={
  () => addNotification({
    text: 'this is important stuff!'
  })
}>notify me!</button>`}
            </Col>
          </Row>
        </Grid>

        <h4><code>message.type</code></h4>

        <p>
          this determines the notification's style &mdash; color scheme & icon. there are four notification types; <strong>info</strong> is the default.
        </p>

        <Grid fluid className="grid">
          <Row className="row" gutterWidth={ 64 }>
            <Col sm={ 12 } md={ 4 } className="column description">
              <h5>error</h5>
              <div>
                <button onClick={ () => addNotification({ type: 'error', text: 'this indicates an error.'}) }>notify me!</button>
              </div>
            </Col>
            <Col component="pre" sm={ 12 } md={ 8 } xl={ 6 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'error',
    text: 'this indicates an error.',
  })
}>notify me!</button>`}
            </Col>
          </Row>
          <Row className="row" gutterWidth={ 64 }>
            <Col sm={ 12 } md={ 4 } className="column description">
              <h5>info</h5>
              <div>
                <button onClick={ () => addNotification({ type: 'info', text: 'this indicates information.'}) }>notify me!</button>
              </div>
            </Col>
            <Col component="pre" sm={ 12 } md={ 8 } xl={ 6 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'info',
    text: 'this indicates information.',
  })
}>notify me!</button>`}
            </Col>
          </Row>
          <Row className="row" gutterWidth={ 64 }>
            <Col sm={ 12 } md={ 4 } className="column description">
              <h5>success</h5>
              <div>
                <button onClick={ () => addNotification({ type: 'success', text: 'this indicates success.'}) }>notify me!</button>
              </div>
            </Col>
            <Col component="pre" sm={ 12 } md={ 8 } xl={ 6 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'success',
    text: 'this indicates success.',
  })
}>notify me!</button>`}
            </Col>
          </Row>
          <Row className="row" gutterWidth={ 64 }>
            <Col sm={ 12 } md={ 4 } className="column description">
              <h5>warning</h5>
              <div>
                <button onClick={ () => addNotification({ type: 'warning', text: 'this indicates a warning.'}) }>notify me!</button>
              </div>
            </Col>
            <Col component="pre" sm={ 12 } md={ 8 } xl={ 6 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'warning',
    text: 'this indicates a warning.',
  })
}>notify me!</button>`}
            </Col>
          </Row>
        </Grid>

        <h4><code>message.autoClose</code></h4>

        <p>
          this determines whether the notification closes itself or remains open until clicked.
          the default value is <code>true</code>.
        </p>

        <Grid fluid className="grid">
          <Row className="row" gutterWidth={ 64 }>
            <Col sm={ 12 } md={ 4 } className="column description">
              <h5>autoClose: true</h5>
              <div>
                <button onClick={ () => addNotification({ type: 'error', text: 'this will close in a bit.', autoClose: true }) }>notify me!</button>
              </div>
            </Col>
            <Col component="pre" sm={ 12 } md={ 8 } xl={ 6 } className="column code">
{`<button onClick={
  () => addNotification({
    type: 'error',
    text: 'this will close in a bit.',
    autoClose: true, // default
  })
}>notify me!</button>`}
            </Col>
          </Row>
          <Row className="row" gutterWidth={ 64 }>
            <Col sm={ 12 } md={ 4 } className="column description">
              <h5>autoClose: false</h5>
              <div>
                <button onClick={ () => addNotification({ type: 'error', text: 'this must be closed manually.', autoClose: false }) }>notify me!</button>
              </div>
            </Col>
            <Col component="pre" sm={ 12 } md={ 8 } xl={ 6 } className="column code">
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

        <h4><code>message.onClick</code> && <code>message.onClose</code></h4>

        <p>
          this lets you define a callback that fires when the notification is clicked.
        </p>

        <Grid fluid className="grid">
          <Row className="row" gutterWidth={ 64 }>
            <Col sm={ 12 } md={ 4 } className="column description">
              <h5>onClick</h5>
              <div>
                <button onClick={ () => addNotification({ type: 'warning', text: 'you will be alerted upon click.', onClick: () => alert('clicked!') })}>notify me!</button>
              </div>
            </Col>
            <Col component="pre" sm={ 12 } md={ 8 } xl={ 6 } className="column code">
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
          this lets you define a callback that fires when the notification closes.
        </p>

        <Grid fluid className="grid">
          <Row className="row" gutterWidth={ 64 }>
            <Col sm={ 12 } md={ 4 } className="column description">
              <h5>onClose</h5>
              <div>
                <button onClick={ () => addNotification({ type: 'success', text: 'you will be alerted upon closing.', onClose: () => alert('closed!'), }) }>notify me!</button>
              </div>
            </Col>
            <Col component="pre" sm={ 12 } md={ 8 } xl={ 6 } className="column code">
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
      </section>

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
              <a href="https://www.npmjs.com/package/@mwatson/react-notifications" rel="noreferrer noopener" target="_blank">
                <svg version="1.1" x="0px" y="0px" width="54" height="21" viewBox="0 0 270 105" xmlns="http://www.w3.org/2000/svg">
                  <path d="m75 97.5v-7.5h-75v-90h270v90h-135v15h-60zm45-15v-7.5h30v-60h-60v75h30zm0-37.5v-15h15v30h-15zm-75 7.5v-22.5h15v45h15v-60h-60v60h30zm150 0v-22.5h15v45h15v-45h15v45h15v-60h-90v60h30z" fill="#cb3837" strokeWidth=".5"/>
                </svg>
              </a>
              <a href="https://www.github.com/mbwatson/react-notifications" rel="noreferrer noopener" target="_blank">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 24 24" fill="#eee">
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
