import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
          style={styles.cardImage}
        />
        {/* Description for the image */}
        <View style={styles.cardBody}>
          <Text style={styles.imageDescription}>
            This image represents a random scenic or abstract view, providing a
            placeholder visual for trending places.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#FFFFFF', // White color for heading
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  cardElevated: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardImage: {
    height: 100,
    width: '100%',
    borderRadius: 8,
  },
  cardBody: {
    paddingTop: 10,
  },
  imageDescription: {
    fontSize: 14,
    color: '#1A1A1A', // Dark text color for better readability on light background
    textAlign: 'center',
    paddingHorizontal: 16,
    marginTop: 8,
    lineHeight: 20,
  },
});
