import { Pressable, PressableProps } from "react-native";
import styles from "./styles";

interface CardProps extends PressableProps {
}

const Card: React.FC<CardProps> = ({ children, ...props }) => (
  <Pressable style={styles.container} {...props}>{children}</Pressable>
);

export default Card;

