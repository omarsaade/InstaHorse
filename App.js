/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Button, Card, Title, Paragraph, IconButton, Colors, TextInput } from 'react-native-paper';
import Home from './source/Home';
import Example from './source/Example';
import Profile from './source/Profile';
import Notifications from './source/Notifications';
import { mdiMagnify } from '@mdi/js';
import { mdiAlertCircle } from '@mdi/js';

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName="Feed"
			tabBarOptions={{
				activeTintColor: '#e91e63'
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size, focused }) => (
						<MaterialCommunityIcons  color={ focused?'red' : 'black'} name="home" size={20} />
					)
				}}
			/>
			<Tab.Screen
				name="Notifications"
				component={Notifications}
				options={{
					tabBarLabel: 'Notifications',
					tabBarIcon: ({ color, size , focused}) => (
						<MaterialCommunityIcons color={ focused?'red' : 'black'} name="bell" size={20} />
					)
				}}
			/>
			<Tab.Screen
				name="Example"
				component={Example}
				options={{
					tabBarLabel: 'Chat',
					tabBarIcon: ({ color, size , focused }) => (
						<MaterialCommunityIcons name="chat" size={20} color={ focused?'red' : 'black'} />
					)
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<Avatar.Image
							size={28}
							source={{
								uri: 'http://media.globalchampionstour.com/cache/770x444/news/89r6864.JPG'
							}}
						/>
					)
				}}
			/>
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	);
}
