import * as React from 'react';
import {Alert, Text, TextInput, View} from 'react-native';
import styles from './styles';
import AppButton from '../../../component/atoms/AppButton';
import {useNavigation} from '@react-navigation/native';
import AppText from '../../../component/atoms/AppText';
import {Trans} from '../../../i18n';
import AppInput from '../../../component/atoms/AppInput';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const defaultValues = {
  email: 'seeToni@gmail.com',
  password: '369852',
};
const Login = () => {
  const navigation = useNavigation();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(Trans('invalidemail'))
      .required(Trans('required')),
    password: Yup.string()
      .required(Trans('required'))
      .min(6, Trans('minSixCharacter')),
  });

  const passwordRef = React.useRef<TextInput | null>(null);

  const onSubmit = value => {
    if (
      defaultValues.email === value.email &&
      defaultValues.password === value.password
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
      <AppText style={styles.headerText}>{Trans('login')}</AppText>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize>
        {({handleBlur, handleChange, handleSubmit, errors, touched}) => {
          return (
            <>
              <AppInput
                label={Trans('email')}
                onChangeText={handleChange('email')}
                error={errors.email}
                onSubmitEditing={() => {
                  passwordRef.current && passwordRef.current.focus();
                }}
                onBlur={handleBlur('email')}
                returnKeyType="next"
                touched={touched.email}
              />
              <AppInput
                label={Trans('password')}
                password
                onChangeText={handleChange('password')}
                error={errors.password}
                onSubmitEditing={handleSubmit}
              />
              <AppText
                style={styles.forgetText}
                onPress={() => navigation.navigate('ForgetPassword')}>
                {Trans('forgetPass')}
              </AppText>
              <AppButton title={'Login'} onPress={handleSubmit} />
              <AppText
                style={styles.signupTextStyle}
                onPress={() => navigation.navigate('Signup')}>
                {Trans('signup')}
              </AppText>
            </>
          );
        }}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Login;
