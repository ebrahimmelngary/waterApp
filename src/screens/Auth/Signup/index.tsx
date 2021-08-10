// import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, Keyboard, TextInput} from 'react-native';
import AppButton from '../../../component/atoms/AppButton';
import AppInput from '../../../component/atoms/AppInput';
import AppText from '../../../component/atoms/AppText';
import {Trans} from '../../../i18n';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {registerRequest} from '../../../service';
import {useMutation} from '@apollo/client';
import RadioButton from '../../../component/molecules/RadioButton';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
type defaultValues = {
  name: string;
  email: string;
  password: string;
};
const defaultValues = {
  name: '',
  email: '',
  password: '',
};
const Signup = () => {
  const {navigate} = useNavigation();
  const roles = [
    {id: 0, label: 'Driver', value: 'driver'},
    {id: 1, label: 'Customer', value: 'customer'},
  ];
  const [registerInput, {loading}] = useMutation(registerRequest);
  const [role, setRole] = React.useState(roles[1]);
  const emailRef = React.useRef<TextInput | null>(null);
  const passwordRef = React.useRef<TextInput | null>(null);
  const validationSchema = Yup.object({
    name: Yup.string().required(Trans('required')),
    email: Yup.string()
      .email(Trans('invalidemail'))
      .required(Trans('required')),
    password: Yup.string()
      .required(Trans('required'))
      .min(7, Trans('minSevenCharacter')),
  });
  const onSubmit = async (values: defaultValues) => {
    registerInput({
      variables: {
        email: values.email,
        password: values.password,
        name: values.name,
        role: role.value,
      },
    })
      .then(() => {
        navigate('Login');
        Toast.show({
          type: 'success',
          text1: 'Signup success',
          text2: 'you can login now',
          position: 'bottom',
        });
      })
      .catch(Error =>
        Toast.show({
          type: 'error',
          text1: 'Some thing Wrong',
          text2: Error.toString(),
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
                <AppText style={styles.SignupAsTitleStyle}>
                  {Trans('SignupAs')}
                </AppText>
                {roles.map(item => (
                  <RadioButton
                    isSelected={role.id === item.id}
                    item={item}
                    key={item.id}
                    onPress={i => setRole(i)}
                  />
                ))}

                <AppButton
                  title={Trans('signup')}
                  onPress={handleSubmit}
                  loading={loading}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
