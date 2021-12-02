import {useNavigation, useRoute} from '@react-navigation/native';
import * as React from 'react';
import {Image, View, ScrollView} from 'react-native';
import ICONS from '../../common/icons';
import AppText from '../../component/atoms/AppText';
import CloudText from '../../component/atoms/CloudText';
import IconWithText from '../../component/molecules/IconWithText';
import AppButton from '../../component/atoms/AppButton';
import {Trans} from '../../i18n';
import styles from './styles';
import COLORS from '../../common/colors';
import {useSelector} from 'react-redux';

interface CheackOutProps {}

const CheackOut = () => {
  const {item, amount, TotalPrice} = useRoute().params;
  const [paymentStatus, setPaymentStatus] = React.useState('cash');
  const {navigate} = useNavigation();
  const current_address = useSelector(state => state.address);
  const TextCard = ({title, value}) => {
    return (
      <View style={styles.rowCardWrappar}>
        <AppText style={styles.rowTitleStyle}>{title}</AppText>
        <AppText style={styles.rowTitleStyle}>{value}</AppText>
      </View>
    );
  };
  console.log('current_address', current_address);
  const shippingFee = 10;
  const total = shippingFee + TotalPrice;
  const onOrderHandeler = () => {
    navigate('OrderStatus', {item: item});
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.headerWrappar}>
        <Image source={item.image} style={styles.imageStyle} />
        <View style={styles.titleWrapparStyle}>
          <AppText style={styles.titleStyle}>{item.name}</AppText>
          <CloudText
            withIcon
            style={styles.cloudStyle}
            tiltle={'Saturday to Thursday'}
            iconName={ICONS.shipped}
          />
        </View>
      </View>
      <View>
        <CloudText
          style={styles.cloudTitleStyle}
          tiltle={'Address'}
          titleStyle={styles.cloudtextStyles}
        />
        <CloudText style={styles.detailsCloudStyle}>
          <View>
            <AppText style={styles.addressStyle}>Dilver To :</AppText>
            {current_address?.street ? (
              <>
                <IconWithText
                  disabled
                  textStyle={styles.iconTextStyle}
                  item={{
                    iconName: ICONS.location,
                    title: current_address?.street,
                  }}
                  style={styles.iconWithTextStyle}
                />
                <IconWithText
                  disabled
                  textStyle={styles.iconTextStyle}
                  item={{
                    iconName: ICONS.telephone,
                    title: current_address?.mobile,
                  }}
                />
              </>
            ) : (
              <AppText style={styles.addAddressStyle}>
                {Trans('add_address')}
              </AppText>
            )}
          </View>
          <AppText
            style={styles.changeText}
            onPress={() => navigate('Address')}>
            {current_address?.street ? Trans('change') : Trans('add')}
          </AppText>
        </CloudText>
      </View>
      <View style={styles.selectPaymentWrappar}>
        <CloudText
          style={styles.cloudTitleStyle}
          tiltle={'Payment'}
          titleStyle={styles.cloudtextStyles}
        />
        <IconWithText
          textStyle={styles.paymentMethodTitleStyle}
          item={{
            iconName:
              paymentStatus === 'visa'
                ? ICONS.radioChecked
                : ICONS.radioUnchecked,
            title: 'Visa',
          }}
          iconColor={paymentStatus === 'visa' ? COLORS.dodgerBlue : null}
          style={styles.paymentMethodStyle}
          onPress={() => setPaymentStatus('visa')}
        />
        <IconWithText
          textStyle={styles.paymentMethodTitleStyle}
          item={{
            iconName:
              paymentStatus !== 'visa'
                ? ICONS.radioChecked
                : ICONS.radioUnchecked,
            title: 'Cash',
          }}
          iconColor={paymentStatus === 'visa' ? null : COLORS.dodgerBlue}
          onPress={() => setPaymentStatus('cash')}
          style={styles.paymentMethodStyle}
        />
      </View>
      <CloudText
        style={styles.cloudTitleStyle}
        tiltle={'Order'}
        titleStyle={styles.cloudtextStyles}
      />
      <View style={styles.orderWrappar}>
        <CloudText tiltle={amount + ' meter'} style={styles.orderAmountStyle} />
        <CloudText tiltle={TotalPrice + ' $'} style={styles.orderAmountStyle} />
      </View>
      <View style={styles.checkOutWrappar}>
        <TextCard title={'Total Price'} value={TotalPrice + ' $'} />
        <TextCard title={'Shipping Fee'} value={shippingFee + ' $'} />
        <View style={styles.hirozintalLine} />
        <TextCard title={'Total'} value={total + ' $'} />
      </View>
      <AppButton
        title={Trans('checkOut')}
        buttonStyle={styles.button}
        onPress={() => onOrderHandeler()}
      />
    </ScrollView>
  );
};

export default CheackOut;
