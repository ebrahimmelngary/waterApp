import {
  MutationFunctionOptions,
  NetworkStatus,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import ListCard, {ListItem} from '../../component/molecules/ListCard';
import EmptyScreen from '../../component/template/EmptyScreen';
import ReloadingScreen from '../../component/template/ReloadingScreen';
import {GET_FAVORITE, REMOVE_FAV} from '../../service';
import {keyExtractor} from '../../utilities/key';
import styles from './styles';

const Favorite = () => {
  const {navigate, addListener} = useNavigation();
  const {data, loading, refetch, networkStatus} = useQuery(GET_FAVORITE, {
    notifyOnNetworkStatusChange: true,
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRemovedID, setIsRmovedId] = React.useState<ListItem>();
  const [remove] = useMutation(REMOVE_FAV);
  React.useEffect(() => {
    const refetchData = addListener('focus', () => {
      refetch();
    });

    return refetchData;
  }, [addListener]);
  const handleRemove = async (
    id: MutationFunctionOptions<any, OperationVariables> | undefined,
  ) => {
    setIsLoading(true);
    await remove({variables: {companyId: id}});
    refetch();
    setIsLoading(false);
  };
  React.useEffect(() => {
    refetch();
  }, [data]);
  if (loading) {
    <ReloadingScreen />;
  }
  return (
    <FlatList
      numColumns={2}
      style={styles.listStyle}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.listColumnStyle}
      data={data?.favorites}
      ListHeaderComponent={
        networkStatus === NetworkStatus.refetch ? <ActivityIndicator /> : null
      }
      ListEmptyComponent={<EmptyScreen onPressIcon={() => refetch()} />}
      renderItem={({item}) => (
        <ListCard
          vlaue={isRemovedID}
          loading={isLoading}
          style={styles.listVirtcalCard}
          item={item}
          componentStyle={'virtcal'}
          remove
          onPress={() => navigate('DetailsScreen', {item: item})}
          onPressIcon={i => {
            handleRemove(i?.id);
            setIsRmovedId(i);
          }}
        />
      )}
    />
  );
};

export default Favorite;
