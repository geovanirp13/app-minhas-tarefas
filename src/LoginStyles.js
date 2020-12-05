import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#34D399'
  },
  titulo: {
      flex: 1,
      justifyContent: 'center'
  },
  tituloText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff'
  },
  content: {
      flex: 1,
      alignItems: 'center',
      width: '90%',
      paddingBottom: 40
  },
  input: {
      backgroundColor: '#fff',
      width: '95%',
      fontSize: 18,
      borderRadius: 5,
      padding: 8,
      marginTop: 5
  },
  btnAcessar: {
      backgroundColor: '#047857',
      width: '95%',
      alignItems: 'center',
      padding: 10,
      marginTop: 10,
      borderRadius: 5
  },
  btnAcessarText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#D1FAE5'
  },
  btnRegistrar: {
      marginTop: 5,
      width: '95%',
      alignItems: 'center',
  },
  btnRegistrarText: {
      fontSize: 14,
      fontWeight: '300',
      color: '#fff'
  }
})

export default styles;