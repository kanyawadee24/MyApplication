import Item from "./Item";
import "./Transaction.css";

const Transaction = () => {
  const data = [
    { title: "ค่ารักษาพยาบาล", amount: "2000" },
    { title: "ค่าน้ำมัน", amount: "5000" },
    { title: "ค่าเช่าบ้าน", amount: "80000" },
    { title: "เงินเดือน", amount: "890" },
    { title: "ค่าประกัน", amount: "300" },
  ];
  return (
    <ul className="item-list">
      {data.map((element) => {
        return <Item title={element.title} amount={element.amount} />
      })}
    </ul>
  );
};

export default Transaction;
