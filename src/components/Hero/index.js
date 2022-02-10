import React from 'react';
import { Text, ImageBackground, View, Image } from 'react-native';
// Styles
import styles from './styles';

// Gradients
import LinearGradient from 'react-native-linear-gradient';


const Hero = ({ filme }) => {
  return (
    <ImageBackground
      style={styles.hero}
      source={{ uri: filme.capa }}
    >

      <Image
        style={styles.logo}
        resizeMode="contain"
        source={{ uri: filme.logoMobile ? filme.logoMobile : filme.logo }}
      />

      <View style={styles.containerTop10}>
        <Image
          style={styles.top10Badge}
          resizeMode="contain"
          source={require('../../assets/badge-top-10.png')}
        />
        <Text
          style={styles.top10Text}
        >
          Top 1 de hoje no Brasil
        </Text>
      </View>

      <LinearGradient
        style={styles.gradient}
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
      />

    </ImageBackground>
  );
}

export default Hero;