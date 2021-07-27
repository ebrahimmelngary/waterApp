/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useDispatch} from 'react-redux';
import {slides} from './data';
import {endIntro} from '../../redux/actions/Intro';
import AppIcon from '../../component/atoms/AppIcon';
import ICONS from '../../common/icons';
import COLORS from '../../common/colors';
import Touchable from '../../component/atoms/Touchable';
import AppText from '../../component/atoms/AppText';
import {calcFont, KEY_EXTRACTOR} from '../../common/styles';
import FONTS from '../../common/fonts';

const Intro = () => {
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    return (
      <ImageBackground style={styles.slide} source={item.image}>
        <Text style={styles.title}>{item.title}</Text>
      </ImageBackground>
    );
  };
  const onDone = () => {
    dispatch(endIntro);
  };

  const renderNextButton = () => {
    return (
      <AppIcon
        name={ICONS.arrowright}
        size={30}
        color={COLORS.dodgerBlue}
        disabled
      />
    );
  };
  const renderDoneButton = () => {
    return (
      <Touchable onPress={onDone}>
        <AppText style={styles.doneStyle}>Done</AppText>
      </Touchable>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      style={{flex: 1}}
      keyExtractor={KEY_EXTRACTOR}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
    />
  );
};

export default Intro;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  doneStyle: {
    ...FONTS.TajawalBold,
    fontSize: calcFont(25),
    color: COLORS.dodgerBlue,
  },
});
