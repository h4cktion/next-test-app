import { useSelector, useDispatch } from 'react-redux';
import { setIdTaskDetail } from "../actions";

function Tile({ task }) {
  const dispatch = useDispatch();
  const {users} = useSelector((state) => state.app);
  const { title, owners, id } = task;

  const getUserInfo = (id) => {
    const user = users.filter(user => user.id === id)[0];
    if (!user) return null;
    return `${user.name.charAt(0)}${user.firstName.charAt(0)}`
  }

  const showTaskDetail = () => {
    dispatch(setIdTaskDetail(id));
  }

  return (
    <div className="bg-gray-50 p-2 rounded my-2" onClick={showTaskDetail}>
      {title}
      <div className="flex justify-end">
        {owners.map((owner) => (
          <div
            key={owner.id}
            className="rounded-full bg-blue-400 h-8 w-8 flex items-center justify-center text-bold text-xs"
          >
            {getUserInfo(owner.id)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tile;
