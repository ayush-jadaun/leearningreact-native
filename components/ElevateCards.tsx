import {ScrollView, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useRef} from 'react';

export default function ElevateCards() {
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScrollToTop = () => {
    scrollViewRef.current?.scrollTo({y: 0, animated: true});
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <Pressable style={styles.scrollButton} onPress={handleScrollToTop}>
        <Text style={styles.scrollButtonText}>Tap Me to Scroll</Text>
      </Pressable>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {cardData.map((card, index) => (
          <View
            key={index}
            style={[styles.card, {backgroundColor: card.color}]}>
            <Text style={styles.cardText}>{card.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const cardData = [
  {name: 'Card 1', color: '#CAD5E2'},
  {name: 'Card 2', color: '#FFD700'},
  {name: 'Card 3', color: '#FF6347'},
  {name: 'Card 4', color: '#4682B4'},
  {name: 'Card 5', color: '#32CD32'},
  {name: 'Card 6', color: '#8A2BE2'},
  {name: 'Card 7', color: '#FF4500'},
  {name: 'Card 8', color: '#2E8B57'},
];

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Darker background color
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginVertical: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  scrollButton: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 8,
    alignItems: 'center',
  },
  scrollButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  container: {
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    width: 200,
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#1A1A1A', // Text color on cards for better contrast
  },
});
