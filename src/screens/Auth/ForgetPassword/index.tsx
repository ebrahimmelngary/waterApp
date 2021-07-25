import * as React from 'react';
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
  email: '',
};
const ForgetPassword = () => {
  const navigation = useNavigation();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(Trans('invalidemail'))
      .required(Trans('required')),
  });
  const onSubmit = () => navigation.navigate('NewPassword');
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      extraScrollHeight={100}
      keyboardShouldPersistTaps={'handled'}
      enableAutomaticScroll
      style={styles.container}>
      <AppText style={styles.headerText}>{Trans('forgetPassword')}</AppText>
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
                onBlur={handleBlur('email')}
                returnKeyType="next"
                touched={touched.email}
                onSubmitEditing={handleSubmit}
              />

              <AppButton title={Trans('newPassword')} onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default ForgetPassword;
