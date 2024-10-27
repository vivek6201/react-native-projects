import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import './global.css';
import {SafeAreaView} from 'react-native-safe-area-context';
import CurrencyComponent from './components/CurencyComponent';

const App = () => {
  const [amount, setAmount] = useState<string>("");
  return (
    <SafeAreaView className="flex-1">
      <View className="items-center mb-5">
        <Text className="text-2xl uppercase p-5">Currency Converter</Text>
      </View>
      <View className="flex-1 gap-5">
        <View className="h-[12rem] gap-5">
          <View className="flex-row justify-between items-center px-10 mb-5">
            <Text>Enter Amount (INR)</Text>
            <TextInput
              className="border border-gray-300 p-2 w-1/2"
              keyboardType="numeric"
              value={amount.toString()}
              defaultValue='0'
              onChangeText={text => setAmount(text)}
            />
          </View>
          <CurrencyComponent amount={amount} />
        </View> 
      </View>
    </SafeAreaView>
  );
};

export default App;
