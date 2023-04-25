import defaultImage from '../../img/Default-welcomer.png';

export const Profile = ({username, tag, location, avatar = defaultImage, stats: { followers, views, likes }}) => {
  return (
    <div class="profile">
  <div class="profile__description">
    <img
      src={ avatar }
      alt={username}
      class="profile__avatar"
    />
      <p class="profile__name">{ username }</p>
      <p class="profile__tag">{ tag }</p>
      <p class="profile__location">{ location }</p>
  </div>

  <ul class="stats">
    <li>
        <span class="stats__label">Followers: </span>
      <span class="stats__quantity">{ followers }</span>
    </li>
    <li>
      <span class="stats__label">Views: </span>
      <span class="stats__quantity">{ views }</span>
    </li>
    <li>
      <span class="stats__label">Likes: </span>
      <span class="stats__quantity">{ likes }</span>
    </li>
  </ul>
 </div>
 )  
}



