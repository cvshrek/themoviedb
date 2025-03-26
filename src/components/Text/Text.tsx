import {  Text, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  fontSize?: number;
  color?: string;
  fontWeight?: 'normal' | 'bold' | number;
  fontStyle?: 'normal' | 'italic';
}

const CustomText: React.FC<CustomTextProps> = ({ ...props }) => {
  return <Text>{props.children}</Text>;
};

export default CustomText;
