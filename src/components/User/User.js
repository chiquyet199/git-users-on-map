import React from 'react'
import PropTypes from 'prop-types'

import './User.scss'

const User = props => {
  const { user } = props
  return <img className="avatar" src={user.avatar_url} />
}

User.propTypes = {
  user: PropTypes.object,
}

User.defaultProps = {
  user: {},
}

export default User
