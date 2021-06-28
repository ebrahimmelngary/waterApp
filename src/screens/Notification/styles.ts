import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import { calcWidth } from '../../common/styles';
const styles = StyleSheet.create({
    listStyle: {
        backgroundColor: COLORS.background,
        padding: calcWidth(20),
    }
  });

  export default styles ;
  