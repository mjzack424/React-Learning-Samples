import { useDispatch } from "react-redux";
import { reactionsAdded } from "../reducers/blogSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  celebrate: "🎉",
  heart: "💝",
  onFire: "🔥",
  wtf: "👀",
};

const ReactionsButton = ({ blog }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        className="muted-button reaction-button"
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionsAdded({ blogId: blog.id, reaction: name }))
        }
      >
        {emoji} {blog.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionsButton;
