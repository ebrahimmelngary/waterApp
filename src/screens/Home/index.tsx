import * as React from 'react';
import {TouchableOpacity, View, Text, FlatList} from 'react-native';
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

  return (
    <View style={styles.container}>
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
              color={COLORS.gray}
              onPress={() => setViewStyle(viewStyle.row)}
              size={calcWidth(14)}
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
              color={COLORS.gray}
              onPress={() => setViewStyle(viewStyle.virtcal)}
              size={calcWidth(14)}
            />
          </View>
        </View>
      </View>
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
    </View>
  );
};

export default Home;
