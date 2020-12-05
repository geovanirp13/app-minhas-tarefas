import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './RegistrarStyles';

export default function Registrar() {
  const [data, setData] = useState({ nome: '', email: '', senha: '', confirmaSenha: '' })

  return (
      <React.Fragment>
          <View style={styles.container}>
              <Text style={styles.tituloText}>Registre-se</Text>

              <TextInput placeholder="Nome" 
                  style={styles.input} />

              <TextInput placeholder="E-mail"
                  style={styles.input} keyboardType="email-address" />

              <TextInput placeholder="Senha" 
                  style={styles.input} secureTextEntry={true} />

              <TextInput placeholder="Confirmar senha"
                  style={styles.input} secureTextEntry={true} />

              <View style={styles.buttons}>
                  <TouchableOpacity style={styles.btnRegistrar}>
                      <Text style={styles.btnRegistrarText}>Registrar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btnCancelar}>
                      <Text style={styles.btnCancelarText}>Cancelar</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </React.Fragment>
  )
}