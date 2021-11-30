import React from 'react';
import { FlatList, ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native';

// Styles
import styles from './styles';

import { Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Secao = ({ secao, hasTopBorder }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {hasTopBorder && <View style={styles.borderTop} />}

      <Title style={styles.secaoTitle}>{secao[0]?.generos[0]}</Title>
      <FlatList
        style={styles.lista}
        horizontal
        data={secao}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Filme', { filme: item, secao })}
            key={index}>
            <ImageBackground
              style={[styles.capa, { marginRight: 10, marginLeft: index === 0 ? 20 : 0 }]}
              source={{ uri: item.capa }}
            >
              <Image resizeMode="contain" style={styles.logo} source={{ uri: item.logoMobile ? item.logoMobile : item.logo }} />
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Secao;