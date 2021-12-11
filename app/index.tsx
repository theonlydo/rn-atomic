import RootNavigation from '@app/navigations';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const Application = () => {
  useEffect(() => {
    // Initial State / did dmount

    // unmount
    return () => {};
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <RootNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Application;
