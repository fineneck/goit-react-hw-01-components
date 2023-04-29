import PropTypes from 'prop-types';
import { imgSize } from "utils";

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img
        className="avatar"
        src={avatar}
        alt="User avatar"
        width={imgSize.friends}
        height={imgSize.friends}
      />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
