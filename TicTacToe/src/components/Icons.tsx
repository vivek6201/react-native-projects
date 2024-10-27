import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

type IconProps = PropsWithChildren<{
  name: string;
}>;

export default function Icons({name}: IconProps) {
  switch (name) {
    case 'circle':
      return <Icon name={'circle-thin'} size={20} color={'#F7CD2E'} />;

    case 'cross':
      return <Icon name="faXmark" size={20} color={'#38CC77'} />;

    default:
      return <Icon name="pencil" size={20} color={'#38CC77'} />;
  }
}
