import styled from 'styled-components'

const Button = ({ plan }) => {
  return <Btn plan={plan}>{plan === 'starter' ? 'Get Started' : plan === 'pro' ? 'Become a Pro' : 'Get Teams'}</Btn>
}

export default Button

const Btn = styled.button`
  background-color: ${({ plan }) => (plan === 'teams' ? '#5a45f2' : plan === 'pro' ? '#000000' : '#ffffff')};
  border: ${({ plan }) => (plan === 'starter' ? '1px solid #5a45f2' : 'none')};
  border-radius: 8px;
  color: ${({ plan }) => (plan !== 'starter' ? '#ffffff' : 'auto')};
  font-weight: 500;
  padding: 12px 16px;
  :hover {
    cursor: pointer;
  }
`
