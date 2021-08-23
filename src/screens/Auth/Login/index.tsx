import * as React from 'react';
import {TextInput, Keyboard} from 'react-native';
import styles from './styles';
import AppButton from '../../../component/atoms/AppButton';
import {useNavigation} from '@react-navigation/native';
import AppText from '../../../component/atoms/AppText';
import {Trans} from '../../../i18n';
import AppInput from '../../../component/atoms/AppInput';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {UserLogin} from '../../../redux/actions/User';
import {useMutation} from '@apollo/client';
import {loginRequest} from '../../../service';
import Toast from 'react-native-toast-message';
const Login = () => {
  const defaultValues = {
    email: 'mg@gmail.com',
    password: '369852147',
  };
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(Trans('invalidemail'))
      .required(Trans('required')),
    password: Yup.string()
      .required(Trans('required'))
      .min(7, Trans('minSevenCharacter')),
  });
  //login request
  const [requestFunc, {data, loading, error}] = useMutation(loginRequest);
  const passwordRef = React.useRef<TextInput | null>(null);

  React.useEffect(() => {
    dispatch(UserLogin(data?.login));
  }, [data, error]);

  const onSubmit = (values: {email: string; password: string}) => {
    requestFunc({
      variables: {
        email: values.email,
        password: values.password,
      },
    })
      .then(() =>
        Toast.show({
          type: 'success',
          text1: 'Login success',
          text2: 'welcome to Water App',
          position: 'bottom',
        }),
      )
      .catch(err =>
        Toast.show({
          type: 'error',
          text1: 'Some thing Wrong',
          text2: err.toString(),
          position: 'bottom',
        }),
      );
    Keyboard.dismiss();
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
                onPress={() => navigate('ForgetPassword')}>
                {Trans('forgetPass')}
              </AppText>
              <AppButton
                title={'Login'}
                onPress={handleSubmit}
                loading={loading}
              />
              <AppText
                style={styles.signupTextStyle}
                onPress={() => navigate('Signup')}>
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
