import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock = 5, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

    const countPlus = () => {
        count<stock ? setCount(count+1) : alert("Máximo stock permitido");    
    }

    const countMinus = () => {
        count>=1 ? setCount(count-1) : setCount(count+0);    
    }
    

    return(
        /* Contador */
        <>
            <div className="itemCountContainer">
                <Button variant="outline-secondary" id="button-add"onClick={countMinus}> - </Button>
                <label className="input-group-text">{count}</label>
                <Button variant="outline-secondary" id="button-minus" onClick={countPlus}> + </Button>                
            </div>
        </>
    );
}

export default ItemCount;