import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  const addToCart = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  };

  const removeFromCart = (itemId) => {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  };

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  const incQuantity = (id) => {
    const newOrder = order.map( el => {
      if(el.mainId === id){
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        }
      }else{
        return el;
      }

    })
    setOrder(newOrder);
  };
  const decQuantity = (id) => {
    const newOrder = order.map( el => {
      if(el.mainId === id){
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity > 0 ? newQuantity : 0,
        }
      }else{
        return el;
      }

    })
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName('');

  };

  return (
    <main className="container content">
      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
      {isCartShow && (
        <BasketList order={order} 
        handleCartShow={handleCartShow} 
        removeFromCart={removeFromCart}
        incQuantity={incQuantity}
        decQuantity={decQuantity}/>
      )}
      {
        alertName && <Alert  name={alertName} closeAlert={closeAlert}/>
      }
    </main>
  );
}

export { Shop };
