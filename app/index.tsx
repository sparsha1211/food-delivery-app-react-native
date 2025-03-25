import { Text, View } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

function Index() {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        
      
      </Stack.Navigator>
  );
}
export default Index;