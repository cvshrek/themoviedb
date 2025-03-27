import { Container } from "@components/Container";
import { Text } from "@components/Text";
import Icon from "@react-native-vector-icons/material-design-icons";
import { useEffect, useState } from "react";
import { Pressable, ViewStyle } from "react-native";
import styles from "./styles";
import { Colors, Dimens, FontSizes } from "@constants";

interface CollapsePickerProps {
    options: Record<string, string>[];
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    style?: ViewStyle;
    children?: React.ReactNode;
}

const CollapsePicker: React.FC<CollapsePickerProps> = ({  ...props }) => {
  const { options, defaultValue, onValueChange } = props;
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedOption, setSelectedOption] = useState<Record<string, string>>(options[0]);

  const handleItemPress = (option: Record<string, string>) => {
    onValueChange?.(option.value);
    setSelectedOption(option);
    setIsCollapsed(true);
  };

  const handlePress = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (defaultValue) {
      const selected = options.find((option) => option.value === defaultValue);
      if (selected) {
        setSelectedOption(selected);
      }
    }
  }, [defaultValue, options]);

  return (
    <Pressable {...props} onPress={handlePress} style={[styles.wrapper, props.style]}>
      <Container
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding={Dimens.dimen_12}
        style={{borderBottomColor: Colors.lightGrey, borderBottomWidth: isCollapsed ? 0.5 : 0}}
      >
        <Text isBold>{selectedOption.label}</Text>
        <Icon name={isCollapsed ? 'chevron-right' : 'chevron-up'} size={Dimens.dimen_24} />
      </Container>
      {!isCollapsed ? <Container style={styles.list}>
        {options.map((option) => (
          <Pressable key={option.value} onPress={() => handleItemPress(option)} style={[styles.item, { backgroundColor: option.value === selectedOption.value ? Colors.secondary : Colors.lightGrey }]}>
            <Text fontSize={FontSizes.font_14} color={option.value === selectedOption.value ? Colors.white : Colors.black}>{option.label}</Text>
          </Pressable>
        ))}
      </Container> :null}
    </Pressable>
  );
}

export default CollapsePicker;