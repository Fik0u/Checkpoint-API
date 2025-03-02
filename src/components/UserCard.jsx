import React from 'react'
import { Card } from 'react-bootstrap'


const UserCard = ({user}) => {
  return (
    <div className='card'>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> {user.name} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> {user.username} </Card.Subtitle>
        <Card.Text>
          {user.email}
          <br />
          {user.address.city}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard
