import { View, Text, ImageSourcePropType, Image } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type DiceProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View>
      <Image source={imageUrl} className='w-40 h-40'/>
    </View>
  )
}

export default Dice