import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import FONTS from '../../../common/fonts';
import {calcFont} from '../../../common/styles';
import COLORS from '../../../common/colors';
const TopTabs = ({screenRoutes, renderScenes}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(screenRoutes);
  const renderScene = SceneMap(renderScenes);

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        labelStyle={styles.labelStyle}
        tabStyle={styles.tabStyle}
        style={styles.tabBarStyle}
        indicatorStyle={styles.indicatorStyle}
        activeColor={COLORS.dodgerBlue}
        inactiveColor={COLORS.Silver}
        scrollEnabled={true}
        bounces={true}
      />
    );
  };
  return (
    <TabView
      lazy
      navigationState={{index, routes}}
      renderScene={renderScene}
      style={{backgroundColor: COLORS.background}}
      onIndexChange={setIndex}
      renderTabBar={props => renderTabBar(props)}
      initialLayout={Dimensions.get('window').width}
    />
  );
};

export default React.memo(TopTabs);

const styles = StyleSheet.create({
  tabStyle: {
    width: Dimensions.get('window').width / 2,
  },
  labelStyle: {
    ...FONTS.TajawalBold,
    fontSize: calcFont(17),
  },
  tabBarStyle: {
    backgroundColor: COLORS.white,
  },
  indicatorStyle: {
    backgroundColor: COLORS.dodgerBlue,
  },
});
