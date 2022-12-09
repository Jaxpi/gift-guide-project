import React,{useState} from "react";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap/lib/InputGroup";
import { Container } from "react-bootstrap/lib/Tab";

const WishList = () => {
    const handleFormSubmit = async (event) => {
        event.preventDefault();}
    const [item, setItem] = useState([]);
    const handleAdd = () => {
        const newItem = [...item, []]
        setItem(newItem)
    }
    const handleChange = (onChangeItem, i) => {
        const inputItem = [...item]
        inputItem[i] = onChangeItem.target.value;
        setItem(inputItem)
    }
    
    console.log(item, "ITEMS")

    return (
        <>
        <Jumbotron>
            <Container>
                <h1>My Wish List</h1>
            </Container>
        </Jumbotron>
        <Button onClick = {() => handleAdd()}>
        Add Item
        </Button>
        {item.map((data,i) => {
            return(
                <div>
                    <input onChange={e => handleChange(e, i)}/>
                    <Button onClick={() => handleDelete(i) }>X</Button>
                </div>
                
            )
        })}
        <Form onSubmit={handleFormSubmit}>

        </Form>
        </>
    )
}




export default WishList;