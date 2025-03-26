import { View, ViewProps } from 'react-native';
import styles from './styles';

interface ContainerProps extends ViewProps {
  containerStyle?: ViewProps['style'];
}

const Container: React.FC<ContainerProps> = (props) => {
  return <View style={[styles.container, props.containerStyle]} {...props}>{props.children}</View>;
};

export default Container;
