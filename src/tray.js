import React from 'react'
import PropTypes from 'prop-types'
import { types } from './config'
import { Notification } from './notification'
import classes from './styles.module.css'

export const NotificationsTray = ({ notifications }) => {
  return (
    <div id="notifications-tray" className={ classes.tray }>
      { notifications.map(message => <Notification key={ message.id } message={ message } />) }
    </div>
  )
}

NotificationsTray.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(types).isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
}
