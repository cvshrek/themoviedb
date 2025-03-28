import { Container } from "@components/Container";
import { TextInput, TextInputProps, ViewStyle } from "react-native";
import styles from './styles';
import { Colors } from "@constants";
import React from 'react';

interface TextFieldProps extends TextInputProps {
  wraperStyle?: ViewStyle,
}

const TextField: React.FC<TextFieldProps> = (props) => (
  <Container style={[styles.wrapper, props.wraperStyle]}>
    <TextInput
      {...props}
      style={[styles.input]}
      underlineColorAndroid="transparent"
      placeholderTextColor={Colors.grey}
    />
  </Container>
)

export default TextField;
