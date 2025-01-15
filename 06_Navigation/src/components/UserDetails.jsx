import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const {userid} = useParams();  //SAME

  // const params = useParams()
  // const userid = params.userid
  return (
    <div>Details about user {userid}</div>
  )
}

export default UserDetails