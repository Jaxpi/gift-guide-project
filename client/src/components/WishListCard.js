import React, { useState } from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";

const WishListCard = () => {
  // const handleFormSubmit = async (event) => {
  //     event.preventDefault();}
  const [item, setItem] = useState([]);
  const handleAdd = () => {
    const newItem = [[], ...item];
    setItem(newItem);
  };
  const handleChange = (onChangeItem, i) => {
    const inputItem = [...item];
    inputItem[i] = onChangeItem.target.value;
    setItem(inputItem);
  };
  const handleDelete = (i) => {
    const deleteItem = [...item];
    deleteItem.splice(i, 1);
    setItem(deleteItem);
  };
  console.log(item, "ITEMS");

  const [style, setStyle] = useState("cont1");

  const changeStyle = function() {
    console.log("you just clicked");
    if (style === "cont1") {
      setStyle("cont2");
    } else if (style === "cont2") {
      setStyle("cont3");
    } else {
      setStyle("cont1");
    }
  };

  return (
    <section className={style}>
      <button
        id="themeButton"
        // To change the theme we invoke dispatch and pass in an object containing action type and payload
        onClick={changeStyle}
        className="btn"
        type="button"
      >
        Theme
      </button>
      <Jumbotron id="wishTitle">
        <Container>
          <h1 id="myListTitle">
            Username's<br></br> Wish List
          </h1>
        </Container>
      </Jumbotron>
      <Button id="addItem" onClick={() => handleAdd()}>
        Add Item
      </Button>
      <Container>
        {item.map((data, i) => {
          return (
            <div>
              <div id="listItem">
                <input
                  id="itemName"
                  value={data}
                  onChange={(e) => handleChange(e, i)}
                />
                <Button id="removeItem" onClick={() => handleDelete(i)}>
                  X
                </Button>
                <Button id="received">Got!</Button>
              </div>
            </div>
          );
        })}
      </Container>
      {/* <Form onSubmit={handleFormSubmit}>

        </Form> */}
    </section>
  );
};

export default WishListCard;
