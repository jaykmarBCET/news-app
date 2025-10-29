import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icons from '@expo/vector-icons/Fontisto';
import React, { useEffect, useState } from 'react';
import { useNewsStore } from '@/store/NewsStore';
import ArticleHomeCard from '@/components/ArticleHomeCard';
import ArticleCard from '@/components/ArticleCard';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {
  const [query, setQuery] = useState<string>("");
  const { getEveryThingArticle, getTopHeadlineArticle, article, topHeadLines } = useNewsStore();

  const router = useRouter()

  useEffect(() => {
    const loadData = async () => {
      const country = await AsyncStorage.getItem("country") || "us"
      const category = await AsyncStorage.getItem("category") || "Business"
      const initialQuery = await AsyncStorage.getItem("query") || ""

      getEveryThingArticle(initialQuery || "Business in India")
      getTopHeadlineArticle(country, category)
    }

    loadData()
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 40 }}>
      <FlatList
        ListHeaderComponent={
          <>
            {/* Search Input */}
            <View style={styles.inputContainer} >
              <Icons onPress={() => router.push("/(tabs)/Search")} size={20} name="search" style={{ marginHorizontal: 10 }} />
              <TextInput
                style={styles.inputText}
                placeholder="Search"
                value={query}
                onChangeText={setQuery}
                placeholderTextColor="#aaa"
                onPress={() => router.push("/(tabs)/Search")}
              />
            </View>

            {/* Breaking News Section */}
            <Text style={styles.heading}>Breaking News</Text>

            <FlatList
              data={topHeadLines}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => <ArticleHomeCard article={item} />}
              horizontal
              contentContainerStyle={{ paddingHorizontal: 10 }}
              ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              showsHorizontalScrollIndicator={false}
            />

            {/* Spacer */}
            <Text style={styles.heading}>Latest Articles</Text>
          </>
        }
        data={article}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <ArticleCard article={item} />}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    textAlign: "left",
    color: "#000",
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
});
