import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textWhite: {
    color: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 999,
  },
  headerSafeAreaView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 70,
  }
});

export default styles;