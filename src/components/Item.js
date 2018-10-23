import React from 'react'

const Item = ({ cost, description }) => (
  <li>
    ${cost} - {description}
  </li>
)

export default Item
