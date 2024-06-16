import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <section>
      <article>
        <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
        <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
        <ul>
          <li>
            ค่าเดินทาง<span>-200</span>
          </li>
          <li>
            เงินเดือน<span>+20,000</span>
          </li>
          <li>
            ค่าอาหาร<span>-500</span>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default App;
