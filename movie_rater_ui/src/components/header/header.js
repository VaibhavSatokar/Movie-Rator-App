import React from 'react'

function Header(props) {
  return (
    <div className='app-header'>
      <h1><i>{props.appName}</i></h1>
    </div>
  )
}

export default Header;
