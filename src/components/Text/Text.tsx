import { Colors, Dimens, FontSizes, Fonts } from '@constants';
import {  Text, TextProps } from 'react-native';

export interface CustomTextProps extends TextProps {
  fontSize?: number;
  color?: string;
  isBold?: boolean;
  fontStyle?: 'normal' | 'italic';
  align?: 'left' | 'center' | 'right';
}

const createTextStyle = (props: CustomTextProps) => ({
  fontFamily: props.isBold ? Fonts.PRIMARY_BOLD : Fonts.PRIMARY_REGULAR,
    fontSize: props.fontSize ?? FontSizes.font_16,
    textAlign: props.align,
    color: props.color ?? Colors.black,
    flexShrink: 1,
    lineHeight: props.fontSize
      ? props.fontSize + Dimens.dimen_4
      : FontSizes.font_16 + Dimens.dimen_4,
});

const CustomText: React.FC<CustomTextProps> = ({ ...props }) => {
  return <Text style={createTextStyle(props)}>{props.children}</Text>;
};

export default CustomText;
