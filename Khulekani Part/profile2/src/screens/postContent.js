import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ImagePickerComponent from '../components/ImagePicker';
import ImageDescriptionInput from '../components/ImageDescription';

const PostContent = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  return (
      <View style={styles.container}>
    
        <View   >
          <TouchableOpacity>
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
        <ImageDescriptionInput setDescription={setDescription} />
        <ImagePickerComponent setImage={setImage} />

        <View>
          <Text>{description}</Text>
        </View>

        <View style={styles.navBTN}>
          <TouchableOpacity onPress={() => navigation.navigate('PostContent')}>
            <Text style={styles.backBTN}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('PostContent2')}>
            <Text style={styles.nextBTN}>Next</Text>
          </TouchableOpacity>

        </View>

      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 10
  },

  headerContainer:{
    flexDirection: 'row',
    marginBottom: 30
  },

  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green'
  },

  pageNo:{
    flex: 1,
    alignItems: 'right',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'darkgreen'
  },

  navBTN:{
    flexDirection: 'row',
    marginTop: 30,
  },

  backBTN:{
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    width: 100,
    textAlign: 'center',
    marginLeft: 60,
    fontWeight: 'bold'

  },

  nextBTN:{
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 20,
    width: 100,
    textAlign: 'center',
    marginLeft: 20,
    color: 'white',
    fontWeight: 'bold'

  },

})

export default PostContent;
