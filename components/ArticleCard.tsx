import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { articlesINterface } from '@/store/NewsStore';
import * as Linking from 'expo-linking'


interface Props {
  article: articlesINterface;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
 
  return (
    <View style={styles.card} >
      {article.urlToImage ? (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      ) : null}
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.description} numberOfLines={3}>
        {article.description}
      </Text>
      <Text style={styles.date}>{new Date(article.publishedAt).toLocaleString()}</Text>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#444',
  },
  date: {
    marginTop: 8,
    fontSize: 12,
    color: '#888',
  },
});
