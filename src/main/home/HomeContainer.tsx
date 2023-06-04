import HomeView from './HomeView';

const HomeContainer = ({route, navigation}) => {
  const props = {route, navigation};

  return <HomeView {...props} />;
};

export default HomeContainer;
