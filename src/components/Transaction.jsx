import Item from "./Item";
import "./Transaction.css";
const Transaction = () => {
  return (
    <ul className="item-list">
      <Item title="ค่ารักษาพยาบาล" amount="2000"/>
      <Item title="เงินเดือน" amount="50000"/>
      <Item title="เดินทาง" amount="500"/>
      <Item title="ค่าเช่าห้อง" amount="8000"/>
    </ul>
  );
};

export default Transaction;
