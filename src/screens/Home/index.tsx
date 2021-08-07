import * as React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import AppText from '../../component/atoms/AppText';
import ListCard, {ListItem} from '../../component/molecules/ListCard';
import AppIcon from '../../component/atoms/AppIcon';
import styles from './styles';
import ICONS from '../../common/icons';
import COLORS from '../../common/colors';
import {calcFont, calcWidth} from '../../common/styles';
import {useNavigation} from '@react-navigation/native';
import {keyExtractor} from '../../utilities/key';
import {useMutation, useQuery} from '@apollo/client';
import {ADD_TO_FAVORITE, getCompanies, REMOVE_FAV} from '../../service';

const Home = () => {
  const viewStyle = {
    row: 'row',
    virtcal: 'virtcal',
  };

  //make getRequest in GraphQl
  const {data, loading, error, refetch} = useQuery(getCompanies);
  const [remove] = useMutation(REMOVE_FAV);
  const [addToFav] = useMutation(ADD_TO_FAVORITE);
  const [favLoading, setFavLoading] = React.useState<boolean>(false);
  const [favID, setFavID] = React.useState<ListItem>();
  const navigation = useNavigation();
  const [view, setViewStyle] = React.useState(viewStyle.row);
  const checkAction = async (item: any) => {
    setFavLoading(true);

    if (item?.isFavorite) {
      await remove({variables: {companyId: item?.id}});
      refetch();
      setFavLoading(false);
    } else {
      await addToFav({
        variables: {
          companyId: item?.id,
        },
      });
      refetch();
      setFavLoading(false);
    }
  };

  React.useEffect(() => {
    const refetchData = navigation.addListener('focus', () => {
      refetch();
    });

    return refetchData;
  }, [navigation]);
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
                backgroundColor: view === 'row' ? COLORS.dodgerBlue : undefined,
              },
            ]}>
            <AppIcon
              name={ICONS.row}
              color={view === 'row' ? COLORS.white : COLORS.gray}
              onPress={() => setViewStyle(viewStyle.row)}
              size={calcWidth(15)}
            />
          </View>
          <View
            style={[
              styles.iconCard,
              {
                backgroundColor: view === 'row' ? undefined : COLORS.dodgerBlue,
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
      {!loading ? (
        error ? (
          <AppText style={styles.error}>{error?.message}</AppText>
        ) : (
          <>
            <HeaderSection />
            <FlatList
              data={data?.companies}
              showsVerticalScrollIndicator={false}
              key={'pearntList+' + Math.random()}
              contentContainerStyle={styles.list}
              numColumns={view === 'row' ? 0 : 2}
              columnWrapperStyle={
                view === 'row' ? undefined : styles.columnWrapar
              }
              renderItem={({item}) => (
                <ListCard
                  item={item}
                  isFavorite={item?.isFavorite}
                  vlaue={favID}
                  loading={favLoading}
                  onPress={i => navigation.navigate('DetailsScreen', {item: i})}
                  onPressIcon={i => {
                    checkAction(i);
                    setFavID(i);
                  }}
                  componentStyle={view}
                />
              )}
              keyExtractor={keyExtractor}
            />
          </>
        )
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default Home;
