import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeContainer from '../home/HomeContainer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{width: '100%', height: '100%'}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainStack" component={HomeContainer} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default HomeStack;
