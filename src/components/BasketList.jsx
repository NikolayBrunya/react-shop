import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    incQuantity    = Function.prototype,
    decQuantity    = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, element) => {
    return sum + element.regularPrice * element.quantity;
  }, 0);

  return (
    <ul class="collection basket-list">
      <li class="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.mainId} {...item}
         removeFromCart={removeFromCart}
         incQuantity={incQuantity}
        decQuantity={decQuantity} />)
      ) : (
        <li class="collection-item">Корзина пуста</li>
      )}
      <li class="collection-item active">Общая стоимость: {totalPrice} руб.
      </li>
      <li class="collection-item">
        <button className="btn-small  ">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleCartShow}>
        close
      </i>
    </ul>
  );
}
export { BasketList };
