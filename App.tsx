import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as StoreProvider } from 'react-redux';
import * as Routes from './navigation.json';
import Store from './redux/store';
import Home from './components/home/home.component';
import Header from './components/header.component';
import Results from './components/results/results.component';

const Stack = createStackNavigator();

const App : React.FC = () => {
  return (
    <StoreProvider store={Store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            headerMode="screen"
            screenOptions={{
              header: props => <Header {...props} title={props.scene.descriptor.options.title ?? props.scene.route.name} />
            }}>
            <Stack.Screen
              name={Routes.Home}
              component={Home}
              options={{
                title: Routes.Home
              }} />
            <Stack.Screen
              name={Routes.Results}
              component={Results}
              options={{
                title: Routes.Results
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}

export default App;
