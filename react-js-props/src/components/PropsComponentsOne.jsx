const PropsComponentsOne = (props) => {
  return (
    <>
      <h3>PropsComponentsOne</h3>
      <ul>
        <li>
            <p>
                {props.name}
            </p>
        </li>
        <li>
            <p>
                {props.familyName}
            </p>
        </li>
      </ul>
      {props.children}
    </>
  );
};

export default PropsComponentsOne;
