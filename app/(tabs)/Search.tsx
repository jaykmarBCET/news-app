import { View, TextInput, StyleSheet, FlatList, Keyboard } from 'react-native'
import Icons from '@expo/vector-icons/Fontisto'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNewsStore } from '@/store/NewsStore'
import ArticleCard from '@/components/ArticleCard'

const Search = () => {
  const [query, setQuery] = useState<string>("")
  const { getEveryThingArticle, article } = useNewsStore()

  const handleSearch = async () => {
    if (query.trim() === "") return
    Keyboard.dismiss()
    await getEveryThingArticle(query)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.inputContainer}>
        <Icons onPress={handleSearch} size={20} name="search" color="#555" style={{ marginHorizontal: 10 }} />
        <TextInput
          style={styles.inputText}
          placeholder="Search"
          value={query}
          onChangeText={setQuery}
          placeholderTextColor="#aaa"
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />
      </View>

      <FlatList
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 80 }}
        data={article}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => <ArticleCard article={item} />}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingHorizontal: 8,
    height: 45,
    marginTop: 16,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    color: '#000'
  }
})

export default Search
