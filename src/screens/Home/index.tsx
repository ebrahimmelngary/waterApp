import * as React from 'react';
import {View, FlatList} from 'react-native';
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
import {ADD_TO_FAVORITE, GET_COMPANIES, REMOVE_FAV} from '../../service';
import {Trans} from '../../i18n';
import EmptyScreen from '../../component/template/EmptyScreen';
import Toast from 'react-native-toast-message';
import ReloadingScreen from '../../component/template/ReloadingScreen';
interface HomeData {
  companies: ListItem[];
}
export interface AddToFavorite {
  customer: ListItem;
  company: ListItem;
}
const Home = () => {
  const viewStyle = {
    row: 'row',
    virtcal: 'virtcal',
  };

  //make getRequest in GraphQl
  const {data, loading, error, refetch} = useQuery<HomeData>(GET_COMPANIES);

  const [remove] = useMutation<{removeFavorite: boolean}, {companyId: number}>(
    REMOVE_FAV,
  );
  const [addToFav] = useMutation<
    {createFavorite: AddToFavorite},
    {companyId: number}
  >(ADD_TO_FAVORITE);
  const [favLoading, setFavLoading] = React.useState<boolean>(false);
  const [favID, setFavID] = React.useState<ListItem>();
  const navigation = useNavigation();
  const [view, setViewStyle] = React.useState(viewStyle.row);

  const checkAction = async (item: ListItem) => {
    setFavLoading(true);

    if (item?.isFavorite) {
      await remove({variables: {companyId: item?.id}});
      refetch();
      Toast.show({
        type: 'success',
        text1: 'Alert',
        text2: `${item.name} removed from Favorite List`,
        autoHide: true,
        visibilityTime: 1000,
        position: 'bottom',
      });
      setFavLoading(false);
    } else {
      await addToFav({
        variables: {
          companyId: item?.id,
        },
      });
      refetch();
      Toast.show({
        type: 'success',
        text1: 'Alert',
        text2: `${item.name} is add to Favorite List`,
        autoHide: true,
        visibilityTime: 1000,
        position: 'bottom',
      });
      setFavLoading(false);
    }
  };

  React.useEffect(() => {
    const refetchData = navigation.addListener('focus', async () => {
      await refetch();
    });

    return refetchData;
  }, [navigation]);
  const HeaderSection = () => {
    return (
      <View style={styles.headerWrappar}>
        <View>
          <AppText style={styles.headrText}>{Trans('watterCompanies')}</AppText>
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
            {view === viewStyle.row ? (
              <FlatList
                data={data?.companies}
                showsVerticalScrollIndicator={false}
                key={'PearntRowList'}
                contentContainerStyle={styles.list}
                ListEmptyComponent={<EmptyScreen disabled />}
                renderItem={({item}) => (
                  <ListCard
                    key={item?.id}
                    item={item}
                    ratingDisabled
                    isFavorite={item?.isFavorite}
                    vlaue={favID}
                    loading={favLoading}
                    onPress={i =>
                      navigation.navigate('DetailsScreen', {item: i})
                    }
                    onPressIcon={i => {
                      checkAction(i);
                      setFavID(i);
                    }}
                    componentStyle={view}
                  />
                )}
                keyExtractor={keyExtractor}
              />
            ) : (
              <FlatList
                data={data?.companies}
                showsVerticalScrollIndicator={false}
                key={'pearntList'}
                contentContainerStyle={styles.list}
                ListEmptyComponent={<EmptyScreen disabled />}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapar}
                renderItem={({item}) => (
                  <ListCard
                    item={item}
                    key={item.id + item.id}
                    ratingDisabled
                    isFavorite={item?.isFavorite}
                    vlaue={favID}
                    loading={favLoading}
                    onPress={i =>
                      navigation.navigate('DetailsScreen', {item: i})
                    }
                    onPressIcon={i => {
                      checkAction(i);
                      setFavID(i);
                    }}
                    componentStyle={view}
                  />
                )}
                keyExtractor={keyExtractor}
              />
            )}
          </>
        )
      ) : (
        <ReloadingScreen />
      )}
    </View>
  );
};

export default Home;
