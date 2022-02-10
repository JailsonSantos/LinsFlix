import React from "react";
import { TouchableOpacity, View, Image } from 'react-native'
import { Caption, Title } from 'react-native-paper';

import styles from "./style";

const Episodio = ({ episodio }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.capa}
          source={{ uri: episodio.capa }} />
        <View>
          <Title style={{ fontSize: 15 }}>
            {episodio.numero}. {episodio.titulo}
          </Title>
          <Caption>45 mins.</Caption>
        </View>
      </View>

      <Caption>
        {episodio.descricao}
      </Caption>
    </TouchableOpacity>
  );
}

export default Episodio;