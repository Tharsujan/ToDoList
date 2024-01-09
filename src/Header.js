import React from 'react'
import "./index.css"

export const Header = ({title}) => {
  return (
  <header>{title}</header>
  )
}
Header.defaultProps={
  title:"To do List"
}


