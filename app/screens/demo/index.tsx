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
import {View, Text} from 'react-native';
import styles from './styles';
import {Config} from '@app/libraries';

const DemoScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Welcome {Config.TEST_CONFIG}</Text>
    </View>
  );
};

export default DemoScreen;
