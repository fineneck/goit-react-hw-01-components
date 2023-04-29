import user from 'data/user.json';
import statistic from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { Section } from 'components/section/Section';
import { FriendList } from 'components/friends/FriendList';
import { TransactionHistory } from 'components/transaction/TransactionHistory';

import { Container } from "components/App/App.styled";

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats">
        <Statistics stats={statistic} />
      </Section>
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </Container>
  );
};
