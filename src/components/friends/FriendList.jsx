import { FriendListItem } from './FriendListItem';
import { FrList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FrList>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FrList>
  );
};
