import { StatusBar  } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <><StatusBar style='light'/>
    <NavigationContainer>
       <Stack.Navigator 
          initialRouteName='Categories'
          screenOptions={{
            headerStyle: { backgroundColor: 'gray' },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: 'black'}
          }}
        >
        <Stack.Screen 
          name="Categories" 
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
          }}
        />
        <Stack.Screen name="MealOverview" component={MealOverviewScreen}/>
        <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
       </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


