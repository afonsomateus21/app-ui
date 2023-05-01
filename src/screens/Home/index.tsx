import { View, Text } from "react-native";
import { Container, Header, Title } from "./styles";
import premierBanner from '../../assets/premier.png';

interface HomeProps {
  onLayout: () => Promise<void>
}

export function Home({ onLayout }: HomeProps) {
  return (
    <Container>
      <Header source={ premierBanner }>
        <Title>Título</Title>
      </Header>
    </Container>
  );
}