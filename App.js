import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { Images, Profiles } from './App/Themes';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.navbar]}> 
          <Image 
            style={[styles.navBarImages, styles.navBarButtons]}
            source={Images.setting} 
          />
          <Image 
            style={[styles.navBarImages, styles.logo]}
            source={Images.logo} 
          />
          <Image 
            style={[styles.navBarImages, styles.navBarButtons]}
            source={Images.chat} 
          />
        </View>
        <View style={[styles.box, styles.profileCard]}> 
          <Image
            style={[styles.profilePic]}
            source={Images.harold}
          />
          <View style={[styles.text]}>
            <Text style={styles.largeText}>
              {this.state.name}, 
            </Text>
            <Text style={styles.largeText}>
              {this.state.age}
            </Text>
          </View>
          <View style={[styles.text]}>
            <Text style={styles.smallText}>
              {this.state.occupation}
            </Text>
          </View>
        </View>
        <View style={[styles.box, styles.bottomActions]}> 
          <View style={[styles.buttonContainer, styles.buttonSmallContainer]}>
            <Image 
              style={[styles.button, styles.buttonSmall]}
              source={Images.rewind}  
            />
          </View>
          <View style={[styles.buttonContainer, styles.buttonBigContainer]}>
            <Image 
              style={[styles.button, styles.buttonBig]}
              source={Images.nope} 
            />
          </View>
          <View style={[styles.buttonContainer, styles.buttonSmallContainer]}>
            <Image 
              style={[styles.button, styles.buttonSmall]}
              source={Images.boost} 
            />
          </View>
          <View style={[styles.buttonContainer, styles.buttonBigContainer]}>
            <Image 
              style={[styles.button, styles.buttonBig]}
              source={Images.like} 
            />
          </View>
          <View style={[styles.buttonContainer, styles.buttonSmallContainer]}>
            <Image 
              style={[styles.button, styles.buttonSmall]}
              source={Images.superLike} 
            />
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  navbar: {
    flex: 0.5,
    marginTop: 40,
    marginBottom: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderBottomWidth: 1,
    borderBottomColor: '#C5C5C5',
  },
  navBarImages: {
    height: Platform.OS === 'ios'? 44: 56, 
  },
  navBarButtons: {
    width: 50, 
    tintColor: '#C5C5C5',
  },
  logo: {
    width: 120, 
  },
  profileCard: {
    margin: 25,
    flex: 4,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#C5C5C5',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  profilePic: {
    resizeMode: 'stretch',
    alignItems: 'center'
  },
  text: {
    paddingLeft: 20,
    paddingTop: 15,
    flexDirection: 'row',
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 16,
    color: '#C5C5C5',
  },
  bottomActions: {
    marginTop: 75,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBigContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttonSmallContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  button: {
    resizeMode: 'contain',
  },
  buttonSmall: {
    width: 25, 
    height: 25, 
  },
  buttonBig: {
    width: 30, 
    height: 30, 
  },
});