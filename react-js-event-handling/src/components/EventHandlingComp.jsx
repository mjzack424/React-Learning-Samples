import { useState } from "react";

const EventHandlingComp = () => {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submit called 🤲");
  };
  return (
    <>
      <h3>EventHandlingComp</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="نام"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="familyName"
          placeholder="نام خانوادگی"
          value={familyName}
          onChange={(e) => setFamilyName(e.target.value)}
        />
        <input
          type="number"
          name="age"
          placeholder="سن"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <button type="submit">ثبت</button>
      </form>
      <div>
        <h6>مشخصات</h6>
        {name &&
          familyName &&
          age &&
          (
            <ul>
              <li>
                نام:
                <span>{name}</span>
              </li>
              <li>
                نام خانوادگی:
                <span>{familyName}</span>
              </li>
              <li>
                سن:
                <span>{age}</span>
              </li>
            </ul>
          )}
      </div>
    </>
  );
};

export default EventHandlingComp;
