import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen branche Gaël</Text>
      <Image
      style ={{width: "100%", height:"50%"}}
        source={{
          uri: 'https://media2.giphy.com/media/8xgqLTTgWqHWU/giphy.gif?cid=ecf05e47daacodjbe66288z7ytkvg8zffttng3kograj0qfc&rid=giphy.gif'
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;