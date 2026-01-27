import { Colors } from '@/constants/theme';
import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {

	const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
		tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index" 
        options={{
          title: 'Currently',
		  tabBarIcon: ({ color }) => <MaterialCommunityIcons name="weather-sunset" size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="today"
        options={{
          title: 'Today',
		  tabBarIcon: ({ color }) => <MaterialCommunityIcons name="weather-partly-cloudy" size={30} color={color} />,
        }}
      />
	  <Tabs.Screen
        name="weekly"
        options={{
          title: 'Weekly',
		  tabBarIcon: ({ color }) => <MaterialCommunityIcons name="weather-tornado" size={30} color={color} />,
        }}
      />
    </Tabs>
  );
}
