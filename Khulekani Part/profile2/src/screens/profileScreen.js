import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import PostNavigator from '../navigation/postsNavigators';

const ProfileScreen = ({navigation}) => {

const PostContent = (event) =>{
  event.preventDefault()
  navigation.navigate('PostContent')
}

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
      <View style={styles.nextTo}>
        <Text style={styles.username}>Profile</Text>
        {/*<TouchableOpacity >
            <Text>Settings</Text>
        </TouchableOpacity>*/}
      </View>
        <Image
          source={{ uri: 'https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg' }}
        style={styles.profileImage}
        />

      <View style={styles.followCounts}>
        <Text style={styles.followText}>Recipe: 2</Text>
        <Text style={styles.followText}>Followers: 100</Text>
        <Text style={styles.followText}>Following: 50</Text>
        </View>
      </View>

      <Text style={styles.username}>Username</Text>
      <Text style={styles.bio}>Type of user</Text>
      <Text style={styles.bio}>Your Bio</Text>

        <View style={styles.profileActions}>
          <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('EditProfileScreen')}>
            <Text style={{color: 'white'}}>Edit Profile</Text>
          </TouchableOpacity>
          
        </View>
      <PostNavigator/>
      <TouchableOpacity style={styles.newContentButton} onPress={PostContent}>
        <Text style={{color: 'white'}}>New Content</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  bio: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },

  profileActions: {
    flexDirection: 'row',
    marginTop: 10,
  },

  editProfileButton: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    marginRight: 5,
    padding: 5
  },

  settingsButton: {
    backgroundColor: 'lightgreen',
    alignItems: 'right',
    padding: 5,
    borderRadius: 5,
    position: 'absolute',
    left: 10
  },

  followCounts: {
    flexDirection: 'row',
    marginTop: 10,
  },

  followText: {
    marginRight: 20,
    fontSize: 15,
    fontWeight: 'bold'
  },

  newContentButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },

  nextTo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

});

export default ProfileScreen;
