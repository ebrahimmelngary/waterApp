import * as React from 'react';
import {ViewStyle} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {calcFont} from '../../../common/styles';

interface RatingStarsProps {
  defaultRating?: number;
  onFinishRating: (value: number) => void;
  isDisabled: boolean;
  starContainerStyle?: ViewStyle;
}

const RatingStars = ({
  onFinishRating,
  isDisabled,
  defaultRating,
  starContainerStyle,
}: RatingStarsProps) => {
  return (
    <AirbnbRating
      count={5}
      isDisabled={isDisabled}
      defaultRating={defaultRating || 0}
      size={calcFont(15)}
      showRating={false}
      onFinishRating={value => onFinishRating(value)}
      starContainerStyle={starContainerStyle}
    />
  );
};

export default RatingStars;
