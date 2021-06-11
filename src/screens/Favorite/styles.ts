import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import { calcWidth } from '../../common/styles';

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: COLORS.background
    },
    listStyle: {
      padding: calcWidth(20),
      
    },
  });

  export default styles;
  