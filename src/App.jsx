import Transaction from "./components/Transaction";
import './App.css'
function App() {
  const design = {color:"grey",textAlign:"center",fontsize:'1.5rem'}
  return (
    <div  className="container">
      <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
      <Transaction />
    </div>
  );
}

export default App;
