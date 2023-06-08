import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profil from '../img/profil.png';
import { Link } from 'react-router-dom';

function UserCard({user}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profil} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
            <h3>{user.username}</h3>
             <h4>{user.address.zipcode}</h4>
        </Card.Text>
        <Link to={`/profil/${user.id}`}>
        <Button variant="primary"> See Profil </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default UserCard;