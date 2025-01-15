import React from 'react'
import {useNavigate} from 'react-router-dom'

function Dashboard() {
    const navigate  = useNavigate();
  return (
    <>
     <div>Dashboard</div>
     <button onClick={()=>navigate(-1)}>Go Back</button>
     </>
  )
}

export default Dashboard