import SomeRandomColor from "./hoc/SomeRandomColor";

const SimpleBox = () => {
  return (
    <>
      <div className="fw-bolder text-white border border-1">
        <p>Simple Box</p>
      </div>
    </>
  );
};

export default SomeRandomColor(SimpleBox);
