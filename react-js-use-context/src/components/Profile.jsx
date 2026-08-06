import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Profile = () => {

    const user = useContext(UserContext);
    return (
        <>
            <h3>
                Profile
            </h3>
            <h5>User Info</h5>
            <span>
                First Name:{" "}
                {user.firstName}
                <br />
            </span>
            <span>
                Last Name:{" "}
                {user.lastName}
                <br />
            </span>
            <span>
                Age:{" "}
                {user.age}
                <br />
            </span>
        </>
    )
}
export default Profile;