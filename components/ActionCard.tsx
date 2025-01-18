import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = () => {
    const url = 'https://ytplaylist-len.sharats.dev/#google_vignette';
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>ActionCard</Text>
      </View>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.cardHeader}>
          <Text style={styles.headerText}>What's new in JavaScript?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Image
            source={{
              uri: 'https://tse4.mm.bing.net/th?id=OIP.CrYNk4RjVVRmfvRTzxc75gHaEK&rs=1&pid=ImgDetMain',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text numberOfLines={3}>
            Discover the latest features and updates in JavaScript, the language
            that powers the web. Dive into new syntax, frameworks, and tools
            that can enhance your development skills.
          </Text>
          <TouchableOpacity onPress={openWebsite}>
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#1A1A1A',
    alignItems: 'center', // Center the entire content
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    width: '100%', // Make the card take up 90% of the width
  },
  elevatedCard: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardHeader: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bodyContainer: {
    marginVertical: 10,
  },
  footerContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderRadius: 8,
  },
  readMoreText: {
    marginTop: 10,
    color: '#1E90FF',
    fontWeight: 'bold',
  },
});
