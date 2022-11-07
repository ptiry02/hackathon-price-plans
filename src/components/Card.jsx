import styled from 'styled-components'
import { list } from '../helpers/constants'
import starterImg from '../assets/images/starter.png'
import proImg from '../assets/images/pro.png'
import teamImg from '../assets/images/team.png'

const Card = ({ plan }) => {
  return (
    <Wrapper plan={plan}>
      <Img src={plan === 'starter' ? starterImg : plan === 'pro' ? proImg : teamImg} />
      <ul>
        {list.map((element, i) => (
          <li key={i} id={i}>
            {element}
          </li>
        ))}
      </ul>
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
