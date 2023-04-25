import user from '../data/user.json';
import statistic from '../data/data.json';
// import friends from '../data/friends.json';
// import transactions from '../data/transactions.json';

import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
// import { FriendList } from './friends/FriendList';
// import { TransactionHistory } from './transaction/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistic.title} />
      <Statistics stats={statistic.stats} />
    </div>

    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template

    // </div>
  );
};
