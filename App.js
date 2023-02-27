import * as React from 'react';
import { View, Image, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen branche Gaël</Text>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={{
          uri: 'https://media2.giphy.com/media/8xgqLTTgWqHWU/giphy.gif?cid=ecf05e47daacodjbe66288z7ytkvg8zffttng3kograj0qfc&rid=giphy.gif'
        }}
      />
    </View>
  );
}

function Musiques() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Musique branche Gaël</Text>
    </View>
  );
}

function Films() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Films branche Gaël</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options= {({ navigation }) =>({
          title: 'Accueil',
          headerStyle: {
            backgroundColor: '#65c7f8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, headerRight: () => (

            <>
              <View style={{ margin: 5}}>
                <Button
                  onPress={() => navigation.navigate("Musiques")}
                  title="Musiques"
                  color="#65c7f8"
                />
              </View>

              <View style={{ margin: 5 }}>
                <Button
                  onPress={() => navigation.navigate("Films")}
                  title="Films"
                  color="#65c7f8"
                />
              </View>
            </>
          ),

        })} />
        <Stack.Screen name="Musiques" component={Musiques}/>
        <Stack.Screen name="Films" component={Films}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;