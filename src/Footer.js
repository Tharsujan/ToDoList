import React from 'react'

export const Footer = ({length}) => {
   
  return (
    <footer>{length}  list {length ===1 ? "item" : "items"}</footer>
  )
}
