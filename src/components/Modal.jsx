import { useContext } from 'react'
import styled from 'styled-components'
import { ModalContext } from '../storage/modal.context'

const Modal = () => {
  const { setIsVisible } = useContext(ModalContext)
  return (
    <Wrapper>
      <Backdrop onClick={() => setIsVisible(false)}></Backdrop>
      <Content>
        <h3>Submit your email adress and you will be contacted soon.</h3>
        <Input type="email" />
        <button onClick={() => setIsVisible(false)} style={{ alignSelf: 'center', padding: '5px 10px' }}>
          Submit
        </button>
      </Content>
    </Wrapper>
  )
}

export default Modal

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Backdrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #0000009e;
`
const Content = styled.div`
  position: fixed;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 18px;
  background-color: white;
  border-radius: 8px;
  top: 20%;
`
const Input = styled.input`
  align-self: center;
  font-size: 1.5em;
  padding: 3px 3px;
`
