import Profile from './components/Profile';
import user from './data/user.json';
// import Statistics from './components/Statistics';
import data from './data/data.json';
// import StatisticsList from './components/StatisticsList';
import Statistics1 from './components/Statistics1';
import FriendList from './components/FriendList';
import friends from './data/friends.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics1 title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
}

export default App;
