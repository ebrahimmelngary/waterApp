import * as React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import ListCard from '../../component/molecules/ListCard';
import styles from './styles';
const Home = () => {
  const viewStyle = {
    row: 'row',
    virtcal: 'virtcal',
  };
  const [view, setViewStyle] = React.useState(viewStyle.row);

  const TestButton = ({onPress, title}) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.testButton}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerIconWrappar}>
        <TestButton title="Row" onPress={() => setViewStyle(viewStyle.row)} />
        <TestButton
          title="Virtcal"
          onPress={() => setViewStyle(viewStyle.virtcal)}
        />
      </View>
      <ListCard componentStyle={view} />
    </View>
  );
};

export default Home;
