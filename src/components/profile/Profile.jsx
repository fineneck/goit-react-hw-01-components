import PropTypes from 'prop-types';
import {
  ProfileBox,
  PrUser,
  PrAvatar,
  PrName,
  PrTag,
  PrLocation,
  PrStats,
  PrStatsEl,
  PrStatsLabel,
  PrStatsQuantity,
} from 'components/profile/Profile.styled';
import defaultImage from 'img/Default-welcomer.png';
import { imgSize } from 'utils';

export const Profile = ({
  username,
  tag,
  location,
  avatar = defaultImage,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileBox>
      <PrUser>
        <PrAvatar
          src={avatar}
          alt={username}
          width={imgSize.profile}
          height={imgSize.profile}
        />
        <PrName>{username}</PrName>
        <PrTag>{tag}</PrTag>
        <PrLocation>{location}</PrLocation>
      </PrUser>

      <PrStats>
        <PrStatsEl>
          <PrStatsLabel>Followers: </PrStatsLabel>
          <PrStatsQuantity>{followers}</PrStatsQuantity>
        </PrStatsEl>
        <PrStatsEl>
          <PrStatsLabel>Views: </PrStatsLabel>
          <PrStatsQuantity>{views}</PrStatsQuantity>
        </PrStatsEl>
        <PrStatsEl>
          <PrStatsLabel>Likes: </PrStatsLabel>
          <PrStatsQuantity>{likes}</PrStatsQuantity>
        </PrStatsEl>
      </PrStats>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
