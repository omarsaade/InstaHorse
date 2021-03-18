//import * as React from 'react';
//import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import { Avatar, TextInput } from 'react-native-paper';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import { Input } from 'react-native-elements';

//export default function Profile() {
//return (
//	>
//		</TouchableOpacity>
//	</View>
//);
//}
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

class Profile extends Component {
	state = {
		email: '',
		password: ''
	};
	handleEmail = (text) => {
		this.setState({ email: text });
	};
	handlePassword = (text) => {
		this.setState({ password: text });
	};
	login = (email, pass) => {
		alert('email: ' + email + ' password: ' + pass);
	};
	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text
						style={{
							textAlign: 'center',
							color: 'black',
							fontSize: 30,
							fontWeight: 'bold'
						}}
					>
						Instahorse
					</Text>
					<Text />
				</View>
				<View>
					<Text style={{ textAlign: 'center', color: 'grey', fontSize: 17 }}>
						Sign up to see photos and videos
					</Text>
					<Text style={{ textAlign: 'center', color: 'grey', fontSize: 17 }}>from your friends.</Text>
				</View>

				<TouchableOpacity style={styles.submitButton}>
					<Text style={styles.submitButtonText}> Log in with Instahorse </Text>
				</TouchableOpacity>

				<Text style={{ textAlign: 'center', color: 'grey' }}>
					________________________ OR ________________________
				</Text>
				<TextInput
					style={styles.input}
					underlineColorAndroid="transparent"
					placeholder="Mobile Number or Email"
					placeholderTextColor="grey"
					autoCapitalize="none"
					onChangeText={this.handleEmail}
				/>

				<TextInput
					style={styles.input}
					underlineColorAndroid="transparent"
					placeholder="Full Name"
					placeholderTextColor="grey"
					autoCapitalize="none"
				/>

				<TextInput
					style={styles.input}
					underlineColorAndroid="transparent"
					placeholder="Username"
					placeholderTextColor="grey"
					autoCapitalize="none"
				/>

				<TextInput
					style={styles.input}
					underlineColorAndroid="transparent"
					placeholder="Password"
					placeholderTextColor="grey"
					autoCapitalize="none"
					onChangeText={this.handlePassword}
				/>

				<TouchableOpacity
					style={styles.submitButton}
					onPress={() => this.login(this.state.email, this.state.password)}
				>
					<Text style={styles.submitButtonText}> Submit </Text>
				</TouchableOpacity>
				<View>
					<Text style={{ textAlign: 'center', color: 'grey', fontSize: 13 }}>
						By Signing up, you argee to our {'\n'}
						<Text
							style={{
								fontWeight: 'bold'
							}}
						>
							{' '}
							Terms. Data Policy and Cookies
						</Text>{' '}
						{'\n'}{' '}
						<Text
							style={{
								fontWeight: 'bold'
							}}
						>
							Policy.
						</Text>
					</Text>
				</View>
			</View>
		);
	}
}
export default Profile;

const styles = StyleSheet.create({
	container: {
		paddingTop: 45
	},
	input: {
		margin: 15,
		height: 40,
		borderColor: 'grey',
		borderWidth: 1
	},
	submitButton: {
		backgroundColor: 'black',
		padding: 10,
		margin: 15,
		height: 40
	},
	submitButtonText: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold'
	}
});
