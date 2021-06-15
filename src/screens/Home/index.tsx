import * as React from 'react';
import {View, FlatList} from 'react-native';
import AppText from '../../component/atoms/AppText';
import ListCard from '../../component/molecules/ListCard';
import {dummyHomeData} from './dummyData';
import AppIcon from '../../component/atoms/AppIcon';
import styles from './styles';
import ICONS from '../../common/icons';
import COLORS from '../../common/colors';
import {calcWidth} from '../../common/styles';
const Home = () => {
  const viewStyle = {
    row: 'row',
    virtcal: 'virtcal',
  };
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
                backgroundColor: view === 'virtcal' ? COLORS.dodgerBlue : null,
              },
            ]}>
            <AppIcon
              name={ICONS.virtcal}
              color={view === 'row' ? COLORS.gray : COLORS.white}
              onPress={() => setViewStyle(viewStyle.virtcal)}
              size={view === 'row' ? calcWidth(14) : calcWidth(19)}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <HeaderSection />
      <FlatList
        data={dummyHomeData}
        key={'pearntList+' + Math.random()}
        style={styles.list}
        numColumns={view === 'row' ? 0 : 2}
        columnWrapperStyle={
          view === 'row' ? null : {justifyContent: 'space-around'}
        }
        renderItem={({item}) => (
          <ListCard
            item={item}
            onPress={i => console.log(i.id)}
            componentStyle={view}
          />
        )}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </>
  );
};

export default Home;
