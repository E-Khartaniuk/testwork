import React from 'react'

import scss from './Button.module.scss'

function AnchorButton({ anchor, className, children }) {
  return (
    <button className={`${scss[className]}`}>
      <a href={anchor} className={scss.btnContent}>
        {children}
      </a>
    </button>
  )
}

export default AnchorButton
