import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, Keyboard, TextInput} from 'react-native';
import AppButton from '../../../component/atoms/AppButton';
import AppInput from '../../../component/atoms/AppInput';
import AppText from '../../../component/atoms/AppText';
import {Trans} from '../../../i18n';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

const defaultValues = {
  name: '',
  email: '',
  password: '',
};
const Signup = () => {
  const navigation = useNavigation();
  const emailRef = React.useRef<TextInput | null>(null);
  const passwordRef = React.useRef<TextInput | null>(null);
  const validationSchema = Yup.object({
    name: Yup.string().required(Trans('required')),
    email: Yup.string()
      .email(Trans('invalidemail'))
      .required(Trans('required')),
    password: Yup.string()
      .required(Trans('required'))
      .min(6, Trans('minSixCharacter')),
  });
  const onSubmit = async (values: any) => {
    Keyboard.dismiss();
    navigation.navigate({
      name: 'CodeVerification',
      params: {values, fromRegister: true},
    });
  };
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      extraScrollHeight={100}
      keyboardShouldPersistTaps={'handled'}
      enableAutomaticScroll
      style={styles.container}>
      <AppText style={styles.headerText}>{Trans('signUpHere')} </AppText>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize>
        {({handleBlur, handleChange, handleSubmit, errors, touched}) => {
          return (
            <>
              <View>
                <AppInput
                  label={Trans('name')}
                  onChangeText={handleChange('name')}
                  error={errors.name}
                  onSubmitEditing={() => {
                    emailRef.current && emailRef.current.focus();
                  }}
                  onBlur={handleBlur('name')}
                  returnKeyType="next"
                  touched={touched.name}
                />
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
              </View>
              <View style={styles.buttonWrapper}>
                <AppButton title={Trans('signup')} onPress={handleSubmit} />
              </View>
            </>
          );
        }}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
