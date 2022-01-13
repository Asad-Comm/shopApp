/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from './src/navigation/RootNavigator';
import { persistor, store } from './src/StateManagement/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {
         console.log('eee ',eval('(class abc{})'))
      }
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
      <RootNavigator />
      </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
