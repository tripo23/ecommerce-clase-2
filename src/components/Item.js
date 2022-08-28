import ItemAdd from "./ItemAdd";
import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';


const Item = (props) => {
    return (
        <Card className="text-center" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.image} width="286" height="180" />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Card.Text>${props.price}</Card.Text>
            <ItemCount />
            <ItemAdd />
          </Card.Body>
        </Card>
      );
}

export default Item;