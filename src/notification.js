import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useNotifications } from './'
import { types } from './config'
import classes from './styles.module.css'

export const Notification = ({ message }) => {
  const { closeNotification, colors, icons, timeVisible, timeFading } = useNotifications()
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (message.autoClose) {
      const fadeTimer = setTimeout(() => setClosing(true), timeVisible)
      const closeTimer = setTimeout(() => closeNotification(message.id), timeVisible + timeFading)
      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(closeTimer)
      }
    }
  }, [closeNotification, message.autoClose, message.id, timeVisible])

  const handleClick = useCallback(() => {
    setClosing(true)
    const closeTimer = setTimeout(() => {
      var getType = {}
      if (message.onClick && getType.toString.call(message.onClick) === '[object Function]') {
        message.onClick()
      }
      closeNotification(message)
    }, timeFading)
    return () => clearTimeout(closeTimer)
  }, [closeNotification, message.id])

  return (
    <div className={ classnames(classes.notification, colors[message.type], closing ? classes.closing : undefined) } onClick={ handleClick } >
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
    onClick: PropTypes.func,
    onClose: PropTypes.func,
  }).isRequired,
}
