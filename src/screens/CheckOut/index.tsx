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
import {useDispatch} from 'react-redux';
import {order} from '../../redux/actions/Order';
import {ORDERD} from '../../redux/actions/actionTypes';
interface CheackOutProps {}

const CheackOut = () => {
  const {item, amount, TotalPrice} = useRoute().params;
  const [paymentStatus, setPaymentStatus] = React.useState('cash');
  const {navigate} = useNavigation();
  const disptch = useDispatch();
  const TextCard = ({title, value}) => {
    return (
      <View style={styles.rowCardWrappar}>
        <AppText style={styles.rowTitleStyle}>{title}</AppText>
        <AppText style={styles.rowTitleStyle}>{value}</AppText>
      </View>
    );
  };
  const shippingFee = 10;
  const total = shippingFee + TotalPrice;
  const onOrderHandeler = () => {
    disptch(
      order({
        type: ORDERD,
        data: {
          quntity: amount,
          totalPrice: TotalPrice,
          price: TotalPrice / amount,
          shipping: shippingFee,
          total: total,
        },
      }),
    );
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
            <IconWithText
              disabled
              textStyle={styles.iconTextStyle}
              item={{
                iconName: ICONS.location,
                title: 'محافظة المنوفية و مركز بركة السبع ',
              }}
              style={styles.iconWithTextStyle}
            />
            <IconWithText
              disabled
              textStyle={styles.iconTextStyle}
              item={{iconName: ICONS.telephone, title: '01153166402'}}
            />
          </View>
          <AppText
            style={styles.changeText}
            onPress={() => navigate('Address')}>
            {Trans('change')}
          </AppText>
        </CloudText>
      </View>
      <View style={styles.selectPaymentWrappar}>
        <CloudText
          style={styles.cloudTitleStyle}
          tiltle={'Address'}
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
