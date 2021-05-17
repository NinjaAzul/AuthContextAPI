import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  constainer: {flex: 1, justifyContent: 'center'},
});

const Dashboard: React.FC = () => {
  const {singOut} = useAuth();
  async function handleSignOut() {
    await singOut();
  }
  return (
    <View style={styles.constainer}>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
