import { useSelector } from "react-redux";
const ShowAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === userId),
  );

  return (
    <small style={{display: "block"}}>
      توسط
      &nbsp;
      {author ? author.fullname : "نویسنده ناشناس"}
    </small>
  );
};
export default ShowAuthor;
