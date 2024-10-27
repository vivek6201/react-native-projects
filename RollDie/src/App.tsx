import {View, Text, ImageSourcePropType, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import './global.css';
import Dice from './Dice';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

//assets
import Die1 from './assets/die1.png';
import Die2 from './assets/die2.png';
import Die3 from './assets/die3.png';
import Die4 from './assets/die4.png';
import Die5 from './assets/die5.png';
import Die6 from './assets/die6.png';

const App = () => {
  const [imageSrc, setImageSrc] = useState<ImageSourcePropType>(Die1);

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const handleRollDie = () => {
    const randNum = Math.floor(Math.random() * 6) + 1;

    switch (randNum) {
      case 1:
        setImageSrc(Die1);
        break;
      case 2:
        setImageSrc(Die2);
        break;
      case 3:
        setImageSrc(Die3);
        break;
      case 4:
        setImageSrc(Die4);
        break;
      case 5:
        setImageSrc(Die5);
        break;
      case 6:
        setImageSrc(Die6);
        break;
      default:
        break;
    }

    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('impactMedium', options);
  };

  return (
    <View className="flex-1 gap-8 justify-center items-center">
      <Dice imageUrl={imageSrc} />
      <TouchableOpacity
        onPress={handleRollDie}
        className="border px-5 py-2 rounded-md w-48 border-blue-700">
        <Text className="text-center uppercase text-blue-700">Roll Die</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
