import {
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import ListCard, {ListItem} from '../../component/molecules/ListCard';
import {GET_FAVORITE, REMOVE_FAV} from '../../service';
import {keyExtractor} from '../../utilities/key';
import styles from './styles';

const Favorite = () => {
  const {navigate, addListener} = useNavigation();
  const {data, loading, refetch} = useQuery(GET_FAVORITE);
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
    <View style={styles.listStyle}>
      <ActivityIndicator />
    </View>;
  }
  return (
    <FlatList
      numColumns={2}
      style={styles.listStyle}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.listColumnStyle}
      data={data?.favorites}
      renderItem={({item}) => (
        <ListCard
          vlaue={isRemovedID}
          loading={isLoading}
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
