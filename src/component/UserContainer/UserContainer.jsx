import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from "../../redux/user/userActions";

const UserContainer = () => {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { error, loading, data } = userData;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        userData &&
        data &&
        data.length && (
          <div>
            <h2>Users List</h2>
            {data.map((user) => (
              <p key={user.id}>{user.name}</p>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default UserContainer;
