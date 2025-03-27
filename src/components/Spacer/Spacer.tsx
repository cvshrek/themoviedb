import {StyleSheet, View} from 'react-native';

interface Props {
  space?: number;
  axis?: 'vertical' | 'horizontal';
}

const Spacer: React.FC<Props> = ({space, axis}) =>  (
    <View
      testID="space-component"
      style={[
        styles.container,
        axis === 'horizontal' ? {width: space} : {height: space},
      ]}
    />
  )

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});

export default Spacer;
