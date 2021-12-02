import * as React from 'react';
import {ActivityIndicator, Platform, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import AppInput from '../../component/atoms/AppInput';
import AppButton from '../../component/atoms/AppButton';
import styles from './styles';
import {useCurrentLocation} from '../../utilities/CustomHooks/useCurrentLocation';
import AppText from '../../component/atoms/AppText';

import {useMutation} from '@apollo/client';
import {CREATE_ADDRESS} from '../../service';
import {useNavigation} from '@react-navigation/native';
import Geocoder from '@timwangdev/react-native-geocoder';
import Toast from 'react-native-toast-message';

const Maps = () => {
  const {loading, error, location} = useCurrentLocation();
  const [buildingInput, setBuildingInput] = React.useState('');
  const [roleInput, setRoleInput] = React.useState<number>(1);
  const [homeInput, setHomeInput] = React.useState('');
  const [phoneInput, setPhoneInput] = React.useState('');
  const [cuurentAddress, setCurrentAddress] = React.useState();
  const [isLoading, setIsloading] = React.useState(false);
  const [createAddress] = useMutation(CREATE_ADDRESS);
  const {goBack} = useNavigation();
  // const CurrentLocation = location?.latitude + ' , ' + location?.longitude;

  const onDone = () => {
    if ((cuurentAddress, roleInput, homeInput, buildingInput, phoneInput)) {
      createAddress({
        variables: {
          apartNumber: homeInput,
          floor: Number(roleInput),
          building: buildingInput,
          street: cuurentAddress[0]?.formattedAddress,
          mobile: phoneInput,
          country: cuurentAddress[0]?.country,
          city: cuurentAddress[0]?.subLocality,
        },
      })
        .then(res => {
          console.log('resss>>', res);
          goBack();
          Toast.show({
            type: 'success',
            text1: 'Add New Address',
            text2: 'You  Added a new address',
            position: 'bottom',
          });
        })
        .catch(err => console.log('err>>>>', err));
    } else {
      Toast.show({
        type: 'error',
        text1: 'Sorry',
        text2: 'You must complate all Address Inputs',
        position: 'bottom',
      });
    }
  };

  const GeocoderOptions = {
    apiKey:
      Platform.OS === 'ios'
        ? 'AIzaSyAeVu00ByB9nuV5pGpI6QPx-z0SHKp9sMw'
        : 'AIzaSyAK_uDhll-zY45SxpXow_nzIPi70grtwQs',
    locale: 'en',
    fallbackToGoogle: true,
    maxResults: 1,
  };
  const position = {lat: location?.latitude, lng: location?.longitude};
  const CurrentLocation = async () => {
    setIsloading(true);
    await Geocoder.geocodePosition(position, GeocoderOptions).then(res =>
      setCurrentAddress(res),
    );
    setIsloading(false);
  };
  React.useEffect(() => {
    CurrentLocation();
  }, [location]);
  console.log('CurrentLocation', cuurentAddress);
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
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <AppInput
              inputWrapparStyle={styles.inputStyle}
              placeholder={'Address'}
              value={cuurentAddress ? cuurentAddress[0]?.formattedAddress : ''}
            />
          )}
          <View style={styles.inputWrappar}>
            <AppInput
              inputWrapparStyle={styles.smallRowInput}
              inputStyle={styles.textInput}
              placeholder={'Building Number'}
              onChangeText={_value => setBuildingInput(_value)}
            />
            <AppInput
              inputWrapparStyle={styles.smallRowInput}
              placeholder={'Role'}
              keyboardType="number-pad"
              inputStyle={styles.textInput}
              onChangeText={_value => setRoleInput(Number(_value))}
            />
            <AppInput
              inputWrapparStyle={styles.smallRowInput}
              placeholder={'Home number'}
              inputStyle={styles.textInput}
              onChangeText={_value => setHomeInput(_value)}
            />
          </View>
          <AppInput
            inputWrapparStyle={styles.inputStyle}
            placeholder={'Phone Number'}
            value={phoneInput}
            maxLength={15}
            onChangeText={_value => setPhoneInput(_value)}
          />
          <AppButton
            title={'Save'}
            buttonStyle={styles.buttonStyle}
            onPress={() => onDone()}
          />
        </>
      )}
    </View>
  );
};

export default Maps;
