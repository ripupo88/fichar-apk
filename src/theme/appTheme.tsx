import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontFamily: 'lucida',
    fontSize: 60,
    marginLeft: 10,
    color: 'white',
  },
  title2: {
    fontSize: 40,
    marginRight: 10,
    marginLeft: 10,
    color: 'white',
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuBoton: {
    marginVertical: 10,
  },
  menuTexto: {
    fontSize: 20,
  },
  input: {
    width: 250,
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 100,
    fontSize: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});
