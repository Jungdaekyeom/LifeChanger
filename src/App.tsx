import * as Sentry from '@sentry/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Root from './navigations/Root';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './main/navi/homeStack';

Sentry.init({
  dsn: '',
  enableNative: false,
});

const queryClient = new QueryClient();

function App(): JSX.Element {
  // 앱 최상단에서 처리할 것들
  return <HomeStack />;
}

function ProviderWrapper(): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default Sentry.wrap(ProviderWrapper);
