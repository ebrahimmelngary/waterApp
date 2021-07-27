import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import AppInput from '../../component/atoms/AppInput';
import AppButton from '../../component/atoms/AppButton';
import styles from './styles';
import {useCurrentLocation} from '../../utilities/CustomHooks/useCurrentLocation';
import AppText from '../../component/atoms/AppText';

const Maps = () => {
  // const [initialRegion, setinitialRegion] = React.useState({
  //   latitude: '',
  //   longitude: '',
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  // });
  const {loading, error, location} = useCurrentLocation();
  // const onRegionChange = region => setinitialRegion({...region});
  // console.log(initialRegion);
  return (
    <View style={styles.container}>
      {error && <AppText>Error</AppText>}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          {location && (
            <MapView
              style={styles.mapStyle}
              provider={PROVIDER_GOOGLE}
              region={{
                ...location,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              // onRegionChange={() => onRegionChange}
              showsMyLocationButton
              showsUserLocation
              showsScale
            />
          )}
          <AppInput
            inputWrapparStyle={styles.inputStyle}
            placeholder={'Address'}
          />
          <View style={styles.inputWrappar}>
            <AppInput
              inputWrapparStyle={styles.smallRowInput}
              placeholder={'a'}
            />
            <AppInput
              inputWrapparStyle={styles.smallRowInput}
              placeholder={'d'}
            />
            <AppInput
              inputWrapparStyle={styles.smallRowInput}
              placeholder={'c'}
            />
          </View>
          <AppInput
            inputWrapparStyle={styles.inputStyle}
            placeholder={'Phone Number'}
          />
          <AppButton title={'Save'} buttonStyle={styles.buttonStyle} />
        </>
      )}
    </View>
  );
};

export default Maps;
