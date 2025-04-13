function BasketItem(props) {
  const {
    mainId,
    displayName,
    quantity,
    regularPrice,
    removeFromCart = Function.prototype,
    incQuantity    = Function.prototype,
    decQuantity    = Function.prototype,
  } = props;

  return (
    <li class="collection-item">
      {displayName} 
      <i className="material-icons basket-quantity" onClick={()=>decQuantity(mainId)}>remove</i> 
      x {quantity}
      <i className="material-icons basket-quantity" onClick={()=>incQuantity(mainId)}>add</i> 
       = {regularPrice * quantity} руб.
      <span
        className="secondary-content"
        onClick={() => removeFromCart(mainId)}
      >
        <i className="material-icons basket-delete"> close </i>
      </span>
    </li>
  );
}

export { BasketItem };
