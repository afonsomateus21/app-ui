import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 100%;
  height: 54px;
  color: ${ ({ theme }) => theme.COLORS.BLACK };
  background-color: ${ ({ theme }) => theme.COLORS.WHITE };
  padding: 0 16px;
`