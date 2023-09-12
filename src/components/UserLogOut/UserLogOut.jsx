import './UserLogOut.css';
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className="UserLogOut">
      <div className="circle" onClick={handleLogOut}>{user.name}</div>
      <div className="logout-bar">
        <button className="btn-sm" onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  );
}
