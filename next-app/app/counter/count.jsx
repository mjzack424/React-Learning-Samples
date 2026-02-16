const count = ({ count, setCount }) => {
  return (
    <>
      <p>شما {count} بار کلیک کرده اید.</p>
      <button onClick={() => setCount(count + 1)}>بزن روش...</button>
    </>
  );
};
export default count;
