import PropTypes from 'prop-types';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="56px"
        height="56px"
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
