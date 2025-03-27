import { View, ViewProps } from 'react-native';

interface ContainerProps extends ViewProps {
  containerStyle?: ViewProps['style'];
  flex?: number;
  padding?: number;
  margin?: number;
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: number;
}

const createContainerStyle = (props: ContainerProps) => ({
  flex: props.flex,
  padding: props.padding,
  flexDirection: props.flexDirection,
  margin: props.margin,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  gap: props.gap,
  ...(props.style && typeof props.style === 'object' ? props.style : {}),
});

const Container: React.FC<ContainerProps> = (props) => {
  return <View style={createContainerStyle(props)} {...props}>{props.children}</View>;
};

export default Container;
