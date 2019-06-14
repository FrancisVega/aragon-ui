import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconConfiguration = ({ size, ...props }) => {
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
        fillRule="evenodd"
        d="M21 17.318a.69.69 0 0 1-.69.69h-1.996a.69.69 0 1 1 0-1.38h1.997c.38 0 .689.31.689.69zm-6.047 0a.69.69 0 0 1-.69.69H3.69a.69.69 0 0 1 0-1.38h10.575c.38 0 .69.31.69.69zm-8.859-5.245a.69.69 0 0 1-.69.69H3.69a.69.69 0 1 1 0-1.38h1.715a.69.69 0 0 1 .69.69zm14.906 0a.69.69 0 0 1-.69.69H9.597a.69.69 0 1 1 0-1.38H20.31a.69.69 0 0 1 .689.69zm-5.906-5.246a.69.69 0 0 1-.69.69H3.69a.69.69 0 0 1 0-1.38h10.715c.38 0 .69.31.69.69zm5.906 0a.69.69 0 0 1-.69.69h-1.996a.69.69 0 0 1 0-1.38h1.997c.38 0 .689.31.689.69z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.912 6.665a2.342 2.342 0 1 1 4.684 0 2.342 2.342 0 0 1-4.684 0zm2.342-.963a.963.963 0 1 0 0 1.926.963.963 0 0 0 0-1.926zm-2.342 11.454a2.342 2.342 0 1 1 4.684 0 2.342 2.342 0 0 1-4.684 0zm2.342-.963a.963.963 0 1 0 0 1.926.963.963 0 0 0 0-1.926zM5.123 11.91a2.342 2.342 0 1 1 4.684 0 2.342 2.342 0 0 1-4.684 0zm2.342-.962a.963.963 0 1 0 0 1.925.963.963 0 0 0 0-1.925z"
        clipRule="evenodd"
      />
    </svg>
  )
}

IconConfiguration.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconConfiguration