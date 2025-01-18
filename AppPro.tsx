import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[style.container, {backgroundColor: '#3c3c3c'}]}>
      <Text style={isDarkMode ? style.whiteText : style.darkText}>
        Hello World
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#ffffff',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;
