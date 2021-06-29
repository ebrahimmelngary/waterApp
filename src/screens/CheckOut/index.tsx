import {useRoute} from '@react-navigation/native';
import * as React from 'react';
import {Image, View, StyleSheet, ScrollView} from 'react-native';
import ICONS from '../../common/icons';
import AppText from '../../component/atoms/AppText';
import CloudText from '../../component/atoms/CloudText';
import IconWithText from '../../component/molecules/IconWithText';
import AppButton from '../../component/atoms/AppButton';
import {Trans} from '../../i18n';
import styles from './styles';
interface CheackOutProps {}

const CheackOut = (props: CheackOutProps) => {
  const {item, amount, TotalPrice} = useRoute().params;
  const TextCard = ({title, value}) => {
    return (
      <View style={styles.rowCardWrappar}>
        <AppText style={styles.rowTitleStyle}>{title}</AppText>
        <AppText style={styles.rowTitleStyle}>{value}</AppText>
      </View>
    );
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
          <AppText style={styles.changeText}>Change</AppText>
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
            iconName: ICONS.location,
            title: 'Visa',
          }}
          style={styles.paymentMethodStyle}
        />
        <IconWithText
          textStyle={styles.paymentMethodTitleStyle}
          item={{
            iconName: ICONS.location,
            title: 'Cash',
          }}
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
        <TextCard title={'Shipping Fee'} value={10 + ' $'} />
        <View style={styles.hirozintalLine} />
        <TextCard title={'Total'} value={TotalPrice + 10 + ' $'} />
      </View>
      <AppButton title={Trans('checkOut')} buttonStyle={styles.button} />
    </ScrollView>
  );
};

export default CheackOut;
