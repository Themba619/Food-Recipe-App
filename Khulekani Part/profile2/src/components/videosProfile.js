import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const Videos = ()=>{

  const data = [
    { id: '1', imageUrl: 'https://via.placeholder.com/200', caption: 'Video 1' },
    { id: '3', imageUrl: 'https://via.placeholder.com/200', caption: 'Video 3' },
    { id: '4', imageUrl: 'https://via.placeholder.com/200', caption: 'Video 4' },
    { id: '5', imageUrl: 'https://via.placeholder.com/200', caption: 'Video 5' },
    { id: '6', imageUrl: 'https://via.placeholder.com/200', caption: 'Video 6' },
  ];

  return(
    <ScrollView style={styles.postContainer}>
    <View >
        {data.map((item) => (
          <Image
            key={item.id}
            source={{ uri: item.imageUrl }}
            style={styles.postImage}
          />
        ))}
    </View>
    </ScrollView>
  )}

const styles = StyleSheet.create({
  postContainer:{
    flex: 1,
    alignItems: 'center',
  },
  postImage: {
    width: 300,
    height: 200,
    margin: 5,
    borderRadius: 15
  },
})

export default Videos;
