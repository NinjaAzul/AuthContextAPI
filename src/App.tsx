import 'react-native-gesture-handler';
import {StyleSheet, Platform, SafeAreaView} from 'react-native';
import React from 'react';
import {AuthProvider} from './contexts/auth';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaView style={styles.droidSafeArea}>
          <Routes />
        </SafeAreaView>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
