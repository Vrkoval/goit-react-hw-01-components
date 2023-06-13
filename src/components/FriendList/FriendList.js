import PropTypes from "prop-types";
import css from './friends.css'
console.log(css);


export const FriendList = ({friends}) => {
  
    return (
    <ul className="friend-list">
          {friends.map(friends =>
            <li className="item" key={friends.id}>
            <span className=
            {friends.isOnline
              ? `${"status"} ${"online"}`
              : `${"status"} ${"offline"}`}
        ></span>
            <img className="avatar" src={friends.avatar} alt="User avatar" width="48" />
            <p className="name">{friends.name}</p>
          </li>
            )}
        </ul>
    )
};


FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};