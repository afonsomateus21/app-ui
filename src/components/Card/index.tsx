import { Container, Foundation, Image, Title } from "./styles";
import unitedImg from '../../assets/united.png';

export function Card() {
  return (
    <Container animation="bounceInRight">
      <Image 
        source={ unitedImg } 
        resizeMode="contain" 
        animation="pulse"
        delay={100}
        iterationCount="infinite"
      />
      <Title> Manchester United </Title>
      <Foundation> Fundado em: 1878 </Foundation>
    </Container>
  );
}