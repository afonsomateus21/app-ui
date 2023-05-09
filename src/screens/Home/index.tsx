import { View, Text } from "react-native";
import { Container, Content, Header, HeaderContent, Title } from "./styles";
import premierBanner from '../../assets/premier.png';
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";

interface HomeProps {
  onLayout: () => Promise<void>
}

export function Home({ onLayout }: HomeProps) {
  return (
    <Container>
      <Header source={ premierBanner } >
        <HeaderContent>
          <Input placeholder="Pesquisar..." />
        </HeaderContent>
      </Header>

      <Content>
        <Card />
      </Content>
    </Container>
  );
}