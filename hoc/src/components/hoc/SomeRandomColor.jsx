const SomeRandomColor = (WrappedComp) => {
  const colors = [
    "danger",
    "warning",
    "success",
    "info",
    "white",
    "dark",
    "secondary",
    "primary",
  ];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (props) => {
    return (
      <span className={`col-6 bg-${randomColor} text-center p-0 m-0`}>
        <WrappedComp />
      </span>
    );
  };
};
export default SomeRandomColor;
