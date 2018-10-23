import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.direction};
`

export const FormBox = styled.form`
  flex: 1;
  background-color: ${props => props.theme.blue};
  padding: 20px;
`

export const Input = styled.input`
  border-radius: 10px;
  height: 30px;
`

export const Button = styled.button`
  border-radius: 10px;
  height: 40px;
  background-color: ${props => props.theme.green};
`