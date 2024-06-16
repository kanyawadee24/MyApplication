import Transaction from "./components/Transaction";

function App() {
  const design = {color:"red",textAlign:"center",fontsize:'1.5rem'}
  return (
    <div>
      <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
      <Transaction />
    </div>
  );
}

export default App;
