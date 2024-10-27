import {StatusBar, Text, View} from 'react-native';
import React from 'react';
import './global.css';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Board from './components/Board';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1'>
        <StatusBar />
        <View className="py-5 flex items-center">
          <Text className="text-2xl font-bold uppercase">TIC TAC TOE</Text>
        </View>
        <View className='flex-1 justify-center items-center'>
          <Board />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
