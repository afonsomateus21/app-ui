import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Header = styled.ImageBackground`
  width: 100%;
  height: 250px;
  position: relative;
`

export const HeaderContent = styled.View`
  position: absolute;
  bottom: 16px;
  left: 24px;
  right: 24px;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
`