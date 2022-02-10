import React from "react";
import { TouchableOpacity, Text } from "react-native";

// Icons
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Styles
import styles from './styles';

const ButtonVertical = ({ icon, text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon name={icon} color="#fff" size={20} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default ButtonVertical;