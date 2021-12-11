import React from 'react';
import {
  NavigationContainer,
  createStackNavigator,
  TransitionPresets,
} from '@app/libraries';
import {DemoScreen} from '@app/screens';
import {NAVIGATION_DEMO} from '@app/constants';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({}) => ({
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
        })}>
        <Stack.Screen name={NAVIGATION_DEMO} component={DemoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
