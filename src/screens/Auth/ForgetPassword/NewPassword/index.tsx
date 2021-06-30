import * as React from 'react';
import {Alert, Text, TextInput, View} from 'react-native';
import styles from './styles';
import AppButton from '../../../../component/atoms/AppButton';
import {useNavigation} from '@react-navigation/native';
import AppText from '../../../../component/atoms/AppText';
import {Trans} from '../../../../i18n';
import AppInput from '../../../../component/atoms/AppInput';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const defaultValues = {
  oldPassword: '',
  password: '',
  confirmPassword: '',
};
const NewPassword = () => {
  const navigation = useNavigation();

  const validationSchema = Yup.object({
    oldPassword: Yup.string()
      .min(6, Trans('minSixCharacter'))
      .required(Trans('required')),
    password: Yup.string()
      .required(Trans('required'))
      .min(6, Trans('minSixCharacter')),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      Trans('passwordNotMatched'),
    ),
  });
  const passwordRef = React.useRef<TextInput | null>(null);
  const confirmPasswordRef = React.useRef<TextInput | null>(null);
  const onSubmit = value => {
    if (
      defaultValues.oldPassword === value.oldPassword &&
      defaultValues.password === value.confirmPassword
    ) {
      Alert.alert('it is Valid');
    } else {
      console.log(value);
      Alert.alert('it is inValid');
    }
  };
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      extraScrollHeight={100}
      keyboardShouldPersistTaps={'handled'}
      enableAutomaticScroll
      style={styles.container}>
      <AppText style={styles.headerText}>{Trans('newPassword')}</AppText>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize>
        {({handleBlur, handleChange, handleSubmit, errors, touched}) => {
          return (
            <>
              <AppInput
                label={Trans('oldPassword')}
                onChangeText={handleChange('oldPassword')}
                error={errors.oldPassword}
                onSubmitEditing={() => {
                  passwordRef.current && passwordRef.current.focus();
                }}
                onBlur={handleBlur('oldPassword')}
                returnKeyType="next"
                touched={touched.oldPassword}
              />
              <AppInput
                label={Trans('password')}
                password
                onChangeText={handleChange('password')}
                onSubmitEditing={() => {
                  confirmPasswordRef.current &&
                    confirmPasswordRef.current.focus();
                }}
                error={errors.password}
              />
              <AppInput
                label={Trans('confirmPassword')}
                password
                onChangeText={handleChange('confirmPassword')}
                error={errors.confirmPassword}
                onSubmitEditing={handleSubmit}
              />

              <AppButton title={Trans('next')} onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default NewPassword;
