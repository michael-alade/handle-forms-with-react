import React from 'react'

const NotificationBox = ({ type, message }) => {
  return (
    <div className={`${type}-box`}>
        { message }
    </div>
  )
}

export default NotificationBox
