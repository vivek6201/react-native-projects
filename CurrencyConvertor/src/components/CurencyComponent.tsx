import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios';

interface Props {
  amount: string;
}

const optionsGet = {
  method: 'GET',
  url: 'https://currency-convertor-api.p.rapidapi.com/currency',
  headers: {
    'x-rapidapi-key': '6e79ac4f15msh1642f74265ebcb9p1faf31jsn3035a07d8221',
    'x-rapidapi-host': 'currency-convertor-api.p.rapidapi.com',
  },
};

const CurencyComponent = ({amount}: Props) => {
  const [currencies, setCurrencies] = useState<
    {
      currencyCode: string;
      currencyName: string;
      flag: string;
    }[]
  >([]);

  const [currentCurrency, setCurrectCurrency] = useState<{
    currencyCode: string;
    currencyName: string;
    flag: string;
  } | null>(null);

  const optionsConvert = {
    method: 'GET',
    url: `https://currency-convertor-api.p.rapidapi.com/convert/${amount}/INR/${currentCurrency?.currencyCode}`,
    headers: {
      'x-rapidapi-key': '6e79ac4f15msh1642f74265ebcb9p1faf31jsn3035a07d8221',
      'x-rapidapi-host': 'currency-convertor-api.p.rapidapi.com',
    },
  };

  const [convertedAmount, setConvertedAmount] = useState('');

  const fetchCurrencies = async () => {
    try {
      const response = await axios.request(optionsGet);

      setCurrencies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    const convert = async () => {
      const res = await axios.request(optionsConvert);
      const data = Number(amount) * Number(res.data[0].rate);
      setConvertedAmount(data.toString())
    };

    convert();
  }, [currentCurrency, amount]);

  return (
    <View className="flex-1 gap-5 flex-row justify-between items-center w-full px-10">
      <View className="flex-1 flex-row gap-2 items-center">
        <Text className="text-xl">
          {currentCurrency === null
            ? 'Select Currency'
            : currentCurrency?.currencyName}
        </Text>
        <SelectDropdown
          data={currencies}
          renderButton={(selectedItem, isOpened) => (
            <View className="w-24">
              <Text className="text-yellow-800 text-center">
                {(selectedItem && selectedItem.currencyCode) ||
                  'Select Currency'}
              </Text>
            </View>
          )}
          renderItem={(item, isSelected) => (
            <View
              className={`flex-1 py-2 px-5 ${
                isSelected ? 'bg-gray-200' : null
              } items-center justify-center`}>
              <Text>{item.currencyName}</Text>
            </View>
          )}
          onSelect={(item, index) => setCurrectCurrency(item)}
        />
      </View>
      <View>
        <Text className="text-xl">
          {convertedAmount === '' ? '0' : convertedAmount}
        </Text>
      </View>
    </View>
  );
};

export default CurencyComponent;
