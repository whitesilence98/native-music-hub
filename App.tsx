import * as React from 'react';
import Navigation from '@navigation';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import './src/i18n';

import store from '@my-store';
import {ThemeProvider} from '@context/theme.context';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
