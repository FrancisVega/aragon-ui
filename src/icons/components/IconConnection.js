import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconConnection = ({ size, ...props }) => {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 9.388a2.385 2.385 0 0 0-2.382 2.382A2.385 2.385 0 0 0 12 14.152a2.385 2.385 0 0 0 2.382-2.382A2.385 2.385 0 0 0 12 9.388zm0 3.31a.929.929 0 0 1 0-1.856.929.929 0 0 1 0 1.855zm4.022-4.951a.727.727 0 1 0-1.027 1.029 4.242 4.242 0 0 1 .003 5.992l-.004.004a.727.727 0 0 0 1.029 1.028l.004-.004a5.698 5.698 0 0 0-.005-8.05zm-7.017 7.017a4.21 4.21 0 0 1-1.242-2.996 4.21 4.21 0 0 1 1.243-3 .727.727 0 0 0-1.029-1.029l-.004.004a5.698 5.698 0 0 0 .005 8.05.725.725 0 0 0 1.028 0 .727.727 0 0 0 0-1.03z"
      />
      <path
        fill="currentColor"
        d="M18.364 5.405a.727.727 0 0 0-1.028 1.029c2.941 2.942 2.941 7.73 0 10.672a.727.727 0 1 0 1.028 1.028A8.943 8.943 0 0 0 21 11.77a8.943 8.943 0 0 0-2.636-6.365zm-11.7 1.029a.727.727 0 0 0-1.028-1.029A8.943 8.943 0 0 0 3 11.77a8.94 8.94 0 0 0 2.636 6.364.724.724 0 0 0 1.028 0 .727.727 0 0 0 0-1.028c-2.941-2.943-2.941-7.73 0-10.672z"
      />
    </svg>
  )
}

IconConnection.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconConnection