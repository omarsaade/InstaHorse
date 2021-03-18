import * as React from 'react';
import { Text, View, SafeAreaView, Image, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Home = () => (
	<ScrollView>
		<Card>
			<Card.Content style={styles.Head}>
				<Avatar.Image
					style={styles.be}
					size={35}
					source={{
						uri: 'http://media.globalchampionstour.com/cache/770x444/news/89r6864.JPG'
					}}
				/>
				<Title style={styles.ben}>Benmaher</Title>

				<Paragraph style={styles.beno}>Location</Paragraph>
			</Card.Content>
			<Card.Cover
				style={{ width: "100%", height: 370 }}
				source={{
					uri:
						'https://cdn.cnn.com/cnnnext/dam/assets/180507113621-ben-maher-on-explosion-w-madrid-exlarge-169.jpg'
				}}
			/>
			<Card.Actions>
				<Button onPress={() => console.log('Liked')}>Like</Button>
				<Button>Comment</Button>
				<Button>Share</Button>
			</Card.Actions>
			<Card.Content style={styles.Head}>
				<Avatar.Image
					style={styles.be}
					size={35}
					source={{
						uri:
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpZAL30CK4xC2PIuh-CByAanXWnD7dGrPaw&usqp=CAU'
					}}
				/>
				<Title style={styles.ben}>Scottbrash</Title>
				<Paragraph style={styles.beno}>Location</Paragraph>
			</Card.Content>
			<Card.Cover
				style={{ width: "100%", height: 370 }}
				source={{ uri: 'https://pbs.twimg.com/profile_images/672123728424132608/z9JBI6ma.jpg' }}
			/>
			<Card.Actions>
				<Button onPress={() => console.log('Liked')}>Like</Button>
				<Button>Comment</Button>
				<Button>Share</Button>
			</Card.Actions>
			<Card.Content style={styles.Head}>
				<Avatar.Image
					style={styles.be}
					size={35}
					source={{
						uri: 'http://media.globalchampionstour.com/cache/770x444/news/89r6864.JPG'
					}}
				/>
				<Title style={styles.ben}>Simondelestre</Title>
				<Paragraph style={styles.beno}>Location</Paragraph>
			</Card.Content>
			<Card.Cover
				style={{ width: "100%", height: 370 }}
				source={{ uri: 'https://pbs.twimg.com/profile_images/976046800997175296/f7cYop6F.jpg' }}
			/>
			<Card.Actions>
				<Button onPress={() => console.log('Liked')}>Like</Button>
				<Button>Comment</Button>
				<Button>Share</Button>
			</Card.Actions>
		</Card>
	</ScrollView>
);

export default Home;

const styles = StyleSheet.create({
	beno: {
		marginTop: -8,
		marginLeft: 44
	},
	ben: {
		marginLeft: 44
	},
	be: {
		marginBottom: -44
	},
	Head: {
		marginTop: 25
	}
});
