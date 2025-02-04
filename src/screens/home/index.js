import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const Home = (props) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        onPress={() => {
          props.navigation.navigate('About');
        }}
        title="Go to About Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Home;
