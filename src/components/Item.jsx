const Item = () => {
  const name = "เดินห้าง";
  const amount = 5000;

  return (
    <li>
      {name}
      <span>-{amount}</span>
    </li>
  );
};

export default Item;
