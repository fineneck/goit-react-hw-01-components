import PropTypes from 'prop-types';
import defaultImage from '../../img/Default-welcomer.png';

export const Profile = ({
  username,
  tag,
  location,
  avatar = defaultImage,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <div className="profile__description">
        <img
          src={avatar}
          alt={username}
          width="96px"
          height="96px"
          className="profile__avatar"
        />
        <p className="profile__name">{username}</p>
        <p className="profile__tag">{tag}</p>
        <p className="profile__location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="stats__label">Followers: </span>
          <span className="stats__quantity">{followers}</span>
        </li>
        <li>
          <span className="stats__label">Views: </span>
          <span className="stats__quantity">{views}</span>
        </li>
        <li>
          <span className="stats__label">Likes: </span>
          <span className="stats__quantity">{likes}</span>
        </li>
      </ul>
    </div>
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
