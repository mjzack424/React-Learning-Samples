const PropsComponentsTwo = ({ name, familyName, children }) => {
  return (
    <>
      <h3>PropsComponentsTwo</h3>
      <ul>
        <li>
          <p>{name}</p>
        </li>
        <li>
          <p>{familyName}</p>
        </li>
      </ul>
      {children}
    </>
  );
};

export default PropsComponentsTwo;
