import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards';
import ElevateCards from './components/ElevateCards';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
       
        <FlatCards />
        <ElevateCards />
      
      </ScrollView>
    </SafeAreaView>
  );
}

export default App