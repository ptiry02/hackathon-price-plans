import GlobalStyle from './assets/style/GlobalStyles'
import Card from './components/Card'

function App() {
  return (
    <>
      <GlobalStyle />
      <Card plan="starter" />
      <Card plan="pro" />
      <Card plan="teams" />
    </>
  )
}

export default App
