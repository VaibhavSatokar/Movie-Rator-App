import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm} from '@fortawesome/free-solid-svg-icons'

function Header(props) {
  return (
    <div>
      <h1>
        <FontAwesomeIcon icon={faFilm} />
        <i>{props.appName}</i>
      </h1>
    </div>
  )
}

export default Header;
