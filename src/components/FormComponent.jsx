import "./FormComponent.css";
const FormComponent = () => {
  return (
    <div>
      <form>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input type="text" placeholder="ระบุชื่อรายการของคุณ" />
        </div>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" />
        </div>
        <div>
          <button type="submit" className="btn">
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
