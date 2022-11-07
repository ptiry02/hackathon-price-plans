import { useContext } from 'react'
import { createPortal } from 'react-dom'
import GlobalStyle from './assets/style/GlobalStyles'
import Card from './components/Card'
import Modal from './components/Modal'
import { ModalContext } from './storage/modal.context'

function App() {
  const { isVisible } = useContext(ModalContext)
  return (
    <>
      <GlobalStyle />
      {isVisible && createPortal(<Modal />, document.getElementById('modals'))}
      <Card plan="starter" />
      <Card plan="pro" />
      <Card plan="teams" />
    </>
  )
}

export default App
