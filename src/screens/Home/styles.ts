import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 17,
    },
    headerIconWrappar: {
      flexDirection: 'row',
    },
   testButton: {
      width: 50,
      height: 20,
      borderColor: COLORS.Silver,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.Silver,
      margin: 20
      
    },
    
  });

  export default styles;
  