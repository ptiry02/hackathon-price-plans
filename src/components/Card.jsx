import styled from 'styled-components'
import { list } from '../helpers/constants'
import starterImg from '../assets/images/starter.svg'
import proImg from '../assets/images/pro.svg'
import teamImg from '../assets/images/team.svg'
import { BiCheck } from 'react-icons/bi'
import Button from './Button'

const Card = ({ plan }) => {
  return (
    <Wrapper plan={plan}>
      <Img src={plan === 'starter' ? starterImg : plan === 'pro' ? proImg : teamImg} />
      <Price>
        {plan === 'starter' && (
          <>
            <p>Starter</p>
            <h2>FREE</h2>{' '}
          </>
        )}
        {plan === 'pro' && (
          <>
            {' '}
            <p>Pro</p>
            <h2>$49</h2>{' '}
          </>
        )}
        {plan === 'teams' && (
          <>
            {' '}
            <p>Teams</p>
            <h2>$99</h2>{' '}
          </>
        )}
        <p style={plan === 'starter' || plan === 'teams' ? { color: '#5F6974' } : {}}>per month</p>
      </Price>
      <List plan={plan}>
        {list.map((element, i) => (
          <li key={i} id={`element-${i}`}>
            <BiCheck style={{ paddingRight: '10px' }} />
            {element}
          </li>
        ))}
      </List>
      <Button plan={plan} />
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ plan }) => (plan === 'starter' ? '16px' : '48px')};
  gap: 16px;
  border: 2px solid ${({ plan }) => (plan === 'pro' ? '#000000' : '#dae9ef')};
  border-radius: 8px;
  background-color: ${({ plan }) => (plan === 'pro' ? '#5A45F2' : '#ffffff')};
  color: ${({ plan }) => (plan === 'pro' ? '#ffffff' : 'auto')};
`
const Img = styled.img`
  align-self: center;
`
const Price = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ plan }) => (plan === 'teams' ? '12px' : '16px')};
  list-style: none;
  ${({ plan }) =>
    plan === 'starter'
      ? '#element-3, #element-4, #element-5, #element-6 {color: #0000007f}'
      : plan === 'pro'
      ? '#element-5, #element-6 {color: #ffffff7f}'
      : 'color: inherit;'}
`
