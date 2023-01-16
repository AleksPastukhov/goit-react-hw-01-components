import Profile from './components/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics';
import data from './data/data.json';
// import from
// import from

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
      <Statistics items={data} />
    </div>
  );
}

export default App;
