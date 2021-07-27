import * as React from 'react';
import {View, FlatList} from 'react-native';
import AppText from '../../component/atoms/AppText';
import ListCard from '../../component/molecules/ListCard';
import {dummyHomeData} from './dummyData';
import AppIcon from '../../component/atoms/AppIcon';
import styles from './styles';
import ICONS from '../../common/icons';
import COLORS from '../../common/colors';
import {calcFont, calcWidth} from '../../common/styles';
import {useNavigation} from '@react-navigation/native';
import {keyExtractor} from '../../utilities/key';
const Home = () => {
  const viewStyle = {
    row: 'row',
    virtcal: 'virtcal',
  };
  const navigation = useNavigation();
  const [view, setViewStyle] = React.useState(viewStyle.row);
  const HeaderSection = () => {
    return (
      <View style={styles.headerWrappar}>
        <View>
          <AppText style={styles.headrText}>Water Company</AppText>
        </View>
        <View style={styles.iconWrappar}>
          <View
            style={[
              styles.iconCard,
              {
                backgroundColor: view === 'row' ? COLORS.dodgerBlue : null,
              },
            ]}>
            <AppIcon
              name={ICONS.row}
              color={view === 'row' ? COLORS.white : COLORS.gray}
              onPress={() => setViewStyle(viewStyle.row)}
              size={view === 'row' ? calcWidth(15) : calcWidth(15)}
            />
          </View>
          <View
            style={[
              styles.iconCard,
              {
                backgroundColor: view === 'row' ? null : COLORS.dodgerBlue,
              },
            ]}>
            <AppIcon
              name={ICONS.virtcal}
              color={view === 'row' ? COLORS.gray : COLORS.white}
              onPress={() => setViewStyle(viewStyle.virtcal)}
              size={view === 'row' ? calcFont(14) : calcFont(19)}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.contentWrapper}>
      <HeaderSection />
      <FlatList
        data={dummyHomeData}
        showsVerticalScrollIndicator={false}
        key={'pearntList+' + Math.random()}
        contentContainerStyle={styles.list}
        numColumns={view === 'row' ? 0 : 2}
        columnWrapperStyle={
          view === 'row' ? null : {justifyContent: 'space-around'}
        }
        renderItem={({item}) => (
          <ListCard
            item={item}
            onPress={i => navigation.navigate('DetailsScreen', {item: i})}
            onPressIcon={i => console.log('i', i)}
            componentStyle={view}
          />
        )}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Home;
