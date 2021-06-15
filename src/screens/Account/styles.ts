import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import { calcFont, calcHeight, calcWidth } from '../../common/styles';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: COLORS.background,
    
  },
  TopSectionStyle: {
    height: calcHeight(150),
    alignItems: 'center',
    marginBottom: calcHeight(20)
  },
  listStyle: {
    paddingHorizontal:calcWidth(17),
  },
  image: {
    width: calcWidth(80),
    height: calcHeight(80),
    borderRadius: calcWidth(14),
    
  },
  imageWrappar: {
    width: calcWidth(80),
    height: calcHeight(90),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: calcHeight(10),
    borderRadius: calcWidth(14),
    backgroundColor: COLORS.gray
    
  },
  titleWrapparStyle: {
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: calcHeight(10)
  },
  titleStyle: {
    fontSize: calcFont(18),
    color: COLORS.blackRock,
    marginHorizontal: calcWidth(15),
    
  },
});

  export default styles;
  