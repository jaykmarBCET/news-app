import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { articlesINterface } from '@/store/NewsStore';

const { width } = Dimensions.get('screen');

const ArticleHomeCard = ({ article }: { article: articlesINterface }) => {
  const imageUri = article.urlToImage || 'https://via.placeholder.com/400x200.png?text=No+Image';

  return (
    <ImageBackground
      source={{ uri: imageUri }}
      style={styles.imageBackground}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {article.title}
        </Text>
        <Text style={styles.description} numberOfLines={3}>
          {article.description}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default ArticleHomeCard;

const styles = StyleSheet.create({
  imageBackground: {
    width: width - 30,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 10,
    justifyContent: 'flex-end',
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  textContainer: {
    padding: 12,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#ddd',
    fontSize: 14,
    marginTop: 4,
  },
});
