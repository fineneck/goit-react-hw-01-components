import PropTypes from 'prop-types';
import { imgSize } from "utils";
import { FrItem, StatusOn, FrImg, FrName } from "./FriendListItem.styled";

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FrItem key={id}>
      <StatusOn>{isOnline}</StatusOn>
      <FrImg
        src={avatar}
        alt="User avatar"
        width={imgSize.friends}
        height={imgSize.friends}
      />
      <FrName>{name}</FrName>
    </FrItem>
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
