import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 55px;
  background: ${({ theme }) => theme.white};
  padding: 0px 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 55px;
  padding: 18px 10px;
  border-bottom: 1px solid #dddfe0;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 19px;
  color: ${({ theme }) => theme.text.black};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &::placeholder {
    color: ${({ theme }) => theme.text.gray};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const inputStyles = { Container, StyledInput, Wrapper };
