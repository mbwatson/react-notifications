import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useNotifications } from './'
import { types } from './config'
import classes from './styles.module.css'
const fadeOutTime = 250 // ms

export const Notification = ({ message }) => {
  console.log(message)
  const { closeNotification, colors, icons, timeout } = useNotifications()
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (message.autoClose) {
      const fadeTimer = setTimeout(() => setClosing(true), timeout)
      const closeTimer = setTimeout(() => closeNotification(message.id), timeout + fadeOutTime)
      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(closeTimer)
      }
    }
  }, [closeNotification, message.autoClose, message.id, timeout])

  const close = useCallback(() => {
    setClosing(true)
    const closeTimer = setTimeout(() => closeNotification(message.id), fadeOutTime)
    return () => clearTimeout(closeTimer)
  }, [closeNotification, message.id])

  return (
    <div className={ classnames(classes.notification, colors[message.type], closing ? classes.closing : undefined) } onClick={ close } >
      <div className={ classes.icon } style={{ backgroundColor: colors[message.type] }}>{ icons[message.type] }</div>
      <div className={ classnames(classes.overlay, message.autoClose ? classes['auto-close'] : undefined) } style={{ backgroundColor: colors[message.type] }}/>
      <div className={ classes.text } style={{ color: colors[message.type] }}>
        { message.text }
      </div>
      <div className={ classes['close-button'] } style={{ color: colors[message.type] }}>
        <small className={ classes['close-text'] }>CLOSE</small> &times;
      </div>
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.shape({
    type: PropTypes.oneOf(types).isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    text: PropTypes.string.isRequired,
    autoClose: PropTypes.bool.isRequired,
  }).isRequired,
}
