import Item from "./Item";
import "./Transaction.css";
import { v4 as uuidv4 } from "uuid";

const Transaction = () => {
  const data = [
    { title: "ค่ารักษาพยาบาล", amount: 2000 },
    { title: "ค่าน้ำมัน", amount: 5000 },
    { title: "ค่าเช่าบ้าน", amount: 80000 },
  ];
  return (
    <ul className="item-list">
      {data.map((element) => {
        return (
          <Item title={element.title} amount={element.amount} key={uuidv4()} />
        );
      })}
    </ul>
  );
};

export default Transaction;
