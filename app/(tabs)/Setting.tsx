import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context'

const Setting = () => {
  const [country, setCountry] = useState('')
  const [category, setCategory] = useState('')
  const [query, setQuery] = useState('')


  useEffect(() => {
    const loadSettings = async () => {
      const savedCountry = await AsyncStorage.getItem('country')
      const savedCategory = await AsyncStorage.getItem('category')
      const savedQuery = await AsyncStorage.getItem('query')

      if (savedCountry) setCountry(savedCountry)
      if (savedCategory) setCategory(savedCategory)
      if (savedQuery) setQuery(savedQuery)
    }

    loadSettings()
  }, [])

  const saveSettings = async () => {
    await AsyncStorage.setItem('country', country)
    await AsyncStorage.setItem('category', category)
    await AsyncStorage.setItem('query', query)
    Alert.alert('Success', 'Settings saved successfully!')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Country Code</Text>
      <TextInput
        style={styles.input}
        value={country}
        onChangeText={setCountry}
        placeholder="e.g., us, in"
      />

      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="e.g., business, sports"
      />

      <Text style={styles.label}>Search Query</Text>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="e.g., Bitcoin, Modi"
      />

      <Button title="Save Settings" onPress={saveSettings} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 4,
    marginBottom: 10
  }
})

export default Setting
