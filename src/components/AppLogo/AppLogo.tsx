import { Image } from "react-native";
import styles from "./styles";
import { Container } from "@components/Container";

const AppLogo: React.FC = () => (
  <Container justifyContent="center" alignItems="center">
    <Image source={require('@assets/images/app_logo.png')} style={styles.image}  />
  </Container>
);

export default AppLogo;

