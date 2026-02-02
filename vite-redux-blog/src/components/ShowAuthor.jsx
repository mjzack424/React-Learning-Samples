import { useSelector } from "react-redux";
import { selectUserById } from "../reducers/userSlice";
const ShowAuthor = ({ userId }) => {
  const author = useSelector((state) => selectUserById(state, userId));

  return (
    <small style={{ display: "block" }}>
      توسط &nbsp;
      {author ? author.fullname : "نویسنده ناشناس"}
    </small>
  );
};
export default ShowAuthor;
