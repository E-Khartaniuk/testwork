import React from 'react'
import scss from './DeveloperCard.module.scss'

import placeholder from '../../img/placholder.svg'

function DeveloperCard({ users }) {
  return (
    <ul className={scss.developersList}>
      {users.map((user) => (
        <li key={user.id} className={scss.devCard}>
          {user.photo && user.photo.includes('placeholder') ? (
            <img src={placeholder} alt="Placeholder" className={scss.cardImg} />
          ) : (
            <img src={user.photo} alt="Developer" className={scss.cardImg} />
          )}
          <div className={scss.toolTip} data-tooltip={user.name}>
            <p className={scss.devCardName}>{user.name}</p>
          </div>

          <div className={scss.toolTip} data-tooltip={user.position}>
            <p className={scss.devCardText}>{user.position}</p>
          </div>

          <div className={scss.toolTip} data-tooltip={user.email}>
            <p className={scss.devCardText} data-tooltip={user.email}>
              {user.email}
            </p>
          </div>
          <div className={scss.toolTip} data-tooltip={user.phone}>
            <p className={scss.devCardText} data-tooltip={user.phone}>
              {user.phone}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default DeveloperCard
