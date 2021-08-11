import * as React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import ListCard, {ListItem} from '../../component/molecules/ListCard';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {keyExtractor} from '../../utilities/key';
import {NetworkStatus, useMutation, useQuery} from '@apollo/client';
import {ADD_TO_FAVORITE, GET_COMPANIES, REMOVE_FAV} from '../../service';
import EmptyScreen from '../../component/template/EmptyScreen';
import Toast from 'react-native-toast-message';
import ReloadingScreen from '../../component/template/ReloadingScreen';
import HeaderSection from '../../component/template/HeaderSection';
import FilterModal, {filterItem} from '../../component/template/FilterModal';
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
  const {data, loading, error, refetch, networkStatus} = useQuery<HomeData>(
    GET_COMPANIES,
    {
      notifyOnNetworkStatusChange: true,
    },
  );
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
  const [isVisible, setisVisible] = React.useState(false);
  const [selected, setSelected] = React.useState<filterItem>();
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

  return (
    <View style={styles.contentWrapper}>
      {!loading ? (
        error ? (
          <EmptyScreen
            message={'Your Network is disconnected'}
            onPressIcon={() => refetch()}
          />
        ) : (
          <>
            <HeaderSection
              viewStatus={view}
              viewStyle={viewStyle}
              onPressRow={() => setViewStyle(viewStyle.row)}
              onPressVirtcal={() => setViewStyle(viewStyle.virtcal)}
              onPressFilter={() => setisVisible(true)}
            />
            {view === viewStyle.row ? (
              <FlatList
                data={data?.companies}
                showsVerticalScrollIndicator={false}
                key={'PearntRowList'}
                contentContainerStyle={styles.list}
                ListHeaderComponent={
                  networkStatus === NetworkStatus.refetch ? (
                    <ActivityIndicator />
                  ) : null
                }
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
                    style={styles.listVirtcalCard}
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
            <FilterModal
              onSelectCity={item => setSelected(item)}
              isSelected={selected}
              onPressDone={() => setisVisible(false)}
              isFilterVisible={isVisible}
              closeModal={() => setisVisible(false)}
              data={[
                {city: 'Maka', id: 1},
                {city: 'Madina', id: 2},
                {city: 'Reiyad', id: 3},
              ]}
            />
          </>
        )
      ) : (
        <ReloadingScreen />
      )}
    </View>
  );
};

export default Home;
