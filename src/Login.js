import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import styles from './LoginStyles';

export default function Login() {
  const [credencial, setCredencial] = useState({ email:'', password: '' })

  return (
      <React.Fragment>
          <StatusBar barStyle="dark-content" />
          <View style={styles.container}>
              <View style={styles.titulo}>
                  <Text style={styles.tituloText}>Minhas Tarefas</Text>
              </View>

              <View style={styles.content}>
                  <TextInput placeholder="email" 
                      style={styles.input} />

                  <TextInput placeholder="senha" 
                      style={styles.input}
                      secureTextEntry={true} />

                  <TouchableOpacity style={styles.btnAcessar}>
                      <Text style={styles.btnAcessarText}>Acessar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btnRegistrar}>
                      <Text style={styles.btnRegistrarText}>Registrar</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </React.Fragment>
  )
}