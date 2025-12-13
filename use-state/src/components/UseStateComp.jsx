import { useState } from "react";

const UseStateComp = () => {
  const [inputs, setInputs] = useState({ firstName: "", familyName: "" });

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "firstName") {
      setInputs({
        firstName: e.target.value,
        familyName: inputs.familyName,
      });
    } else if (e.target.name === "familyName") {
      setInputs({
        familyName: e.target.value,
        firstName: inputs.firstName,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${inputs.firstName} Family: ${inputs.familyName}`);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="firstName" onChange={handleChange} placeholder="name" />
          <input
            name="familyName"
            onChange={handleChange}
            placeholder="family Name"
          />
          <button type="submit">ثبت</button>
        </form>
      </div>
      <div>
        Use Name is {inputs.firstName} {inputs.familyName}
      </div>
    </>
  );
};
export default UseStateComp;
