import React, { createContext, useCallback, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { NotificationsTray } from './tray'
import * as config from './config'

export const NotificationsContext = createContext({})

export const useNotifications = () => useContext(NotificationsContext)

export const Notifications = ({ timeVisible, timeFading, children }) => {
  const [queue, setQueue] = useState([])

  const addNotification = message => {
    const newMessage = {
      ...config.defaults, // default to auto close
      ...message, // spread message prop in, possibly overwriting autoclose
      id: Math.random().toString(36).substr(2, 9), // construct id
    }
    // append new message to notifications queue
    setQueue([ ...queue, newMessage])
  }

  const closeNotification = useCallback(id => {
    setQueue(queue => queue.filter(message => message.id !== id))
  }, [])

  return (
    <NotificationsContext.Provider
      value={{
        addNotification, closeNotification,
        colors: config.colors,
        icons: config.icons,
        timeVisible: timeVisible,
        timeFading: timeFading,
      }}
    >
      { children }
      <NotificationsTray notifications={ queue } />
    </NotificationsContext.Provider>
  )
}

Notifications.propTypes = {
  colors: PropTypes.shape({
    info: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    success: PropTypes.string.isRequired,
    warning: PropTypes.string.isRequired,
  }).isRequired,
  timeVisible: PropTypes.number.isRequired,
}

Notifications.defaultProps = {
  colors: config.colors,
  timeVisible: config.timeVisible,
  timeFading: config.timeFading,
}
