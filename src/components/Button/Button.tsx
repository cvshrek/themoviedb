import {  Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;

}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <TouchableOpacity {...props}>
    <Text>{props.title}</Text>
  </TouchableOpacity>;
};

export default Button;
