import PropTypes from 'prop-types';
import { ProfileBox, ProfileUser, ProfileAvatar, ProfileName, ProfileTag, ProfileLocation, ProfileStats, ProfileStatsEl, ProfileStatsLabel, ProfileStatsQuantity } from "components/profile/Profile.styled";
import defaultImage from 'img/Default-welcomer.png';
import { imgSize } from "utils";

export const Profile = ({
  username,
  tag,
  location,
  avatar = defaultImage,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileBox>
      <ProfileUser>
        <ProfileAvatar
          src={avatar}
          alt={username}
          width={imgSize.profile}
          height={imgSize.profile}
        />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileUser>

      <ProfileStats>
        <ProfileStatsEl>
          <ProfileStatsLabel>Followers: </ProfileStatsLabel>
          <ProfileStatsQuantity>{followers}</ProfileStatsQuantity>
        </ProfileStatsEl>
        <ProfileStatsEl>
          <ProfileStatsLabel>Views: </ProfileStatsLabel>
          <ProfileStatsQuantity>{views}</ProfileStatsQuantity>
        </ProfileStatsEl>
        <ProfileStatsEl>
          <ProfileStatsLabel>Likes: </ProfileStatsLabel>
          <ProfileStatsQuantity>{likes}</ProfileStatsQuantity>
        </ProfileStatsEl>
      </ProfileStats>
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
