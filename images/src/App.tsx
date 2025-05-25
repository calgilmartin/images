import './App.css'
import NavBar from './components/NavBar.tsx'

function App() {

  return (
    <>
      <NavBar />
      <h2>Welcome!</h2>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
        <img src="/IMG_7645.jpg" alt="Image 1" style={{ width: '300px', height: 'auto' }} />
        <img src="/IMG_7646.jpg" alt="Image 2" style={{ width: '300px', height: 'auto' }} />
        <img src="/IMG_7647.jpg" alt="Image 3" style={{ width: '300px', height: 'auto' }} />
      </div>
    </>
  )
}

export default App
