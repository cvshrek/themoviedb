import { Text } from "@components/Text";
import { Colors, Dimens } from "@constants";
import { TextStyle, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from './styles';
import { ReactNode } from "react";

type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  titleStyle?: TextStyle,
  size?: ButtonSize,
  buttonStyle?: TouchableOpacityProps['style'],
  defaultRadius?: boolean,
  type?: 'default' | 'outline',
  leftContent?: ReactNode,
  color?: string
}

const getButtonHeight = (size?: ButtonSize): number => {
  if (size === 'lg') return Dimens.dimen_56;
  if (size === 'sm') return Dimens.dimen_40;
  return Dimens.dimen_48
}

const getButtonBorder = (type?: 'default' | 'outline'): number => {
  if (type === 'outline') return 0.5;
  return 0;
}

const createButtonStyle = (props: ButtonProps): TouchableOpacityProps['style'] => ({
  height: getButtonHeight(props.size),
  backgroundColor: props.disabled ? Colors.lightGrey : Colors.secondary,
  borderRadius: props.defaultRadius ? Dimens.dimen_4 : getButtonHeight(props.size)/2,
  borderWidth: getButtonBorder(props?.type),
  borderColor: props.color
})

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <TouchableOpacity {...props} style={[styles.button, createButtonStyle(props), props.buttonStyle]} >
    {props.leftContent}
    <Text isBold color={props.disabled ? Colors.grey : Colors.white}>{props.title}</Text>
  </TouchableOpacity>;
};

export default Button;
