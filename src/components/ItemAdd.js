import Button from 'react-bootstrap/Button';
import {onAdd} from '../App.js'

const ItemAdd = () => {
    return (
        <Button variant="outline-secondary" id="button-add" onClick={onAdd}> Agregar al carrito </Button>
    );
    
}

export default ItemAdd;