import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { categoryArray } from '@/constants/Category'
import { useNewsStore } from '@/store/NewsStore'
import ArticleCard from '@/components/ArticleCard';



const Discover = () => {
  const [category, setCategory] = useState<string>("Business")
  const {getTopHeadlineArticle,topHeadLines} = useNewsStore()

  useEffect(()=>{
   
    getTopHeadlineArticle("us",category)
  },[category,getTopHeadlineArticle])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Trending Right Now</Text>
        <ScrollView>
          <FlatList
            data={categoryArray}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  category === item && styles.selectedButton
                ]}
                onPress={() => setCategory(item)}
              >
                <Text style={styles.categoryText}>{item}</Text>
              </TouchableOpacity>
            )}
          />

          <FlatList
             data={topHeadLines}
             keyExtractor={(item)=>item.title}
             ItemSeparatorComponent={()=><View style={{margin:5}}/>}
             renderItem={({item})=>(
              <ArticleCard article={item} />
             )}
             />
        </ScrollView>


      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff'
  },
  content: {
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 20
  },
  selectedButton: {
    backgroundColor: '#007bff'
  },
  categoryText: {
    color: '#000'
  }
})

export default Discover
