import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      color: '#065F46',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#34D399'
  },
  tituloText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      padding: 20
  },
  input: {
      backgroundColor: '#fff',
      width: '90%',
      fontSize: 18,
      borderRadius: 5,
      padding: 8,
      marginTop: 5
  },
  buttons: {
      flexDirection: 'row',
      marginTop: 15
  },
  btnRegistrar: {
      backgroundColor: '#059669',
      width: '40%',
      alignItems: 'center',
      padding: 10,
      marginTop: 10,
      borderRadius: 5,
      marginRight: 10
  },
  btnRegistrarText: {
      fontSize: 14,
      fontWeight: '500',
      color: '#D1FAE5'
  },
  btnCancelar: {
      backgroundColor: '#059669',
      width: '40%',
      alignItems: 'center',
      padding: 10,
      marginTop: 10,
      borderRadius: 5
  },
  btnCancelarText: {
      fontSize: 14,
      fontWeight: '500',
      color: '#D1FAE5'
  }
});

export default styles;