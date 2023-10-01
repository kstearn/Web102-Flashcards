import './App.css'
import Card from './components/Card';

export default function App() {
  return (
    <main>
      <div className="info">
        <h1>Learn Japanese🇯🇵</h1>
        <p>Cards include the hiragana reading, romaji reading, and meaning on the back. 頑張ってください！</p>
        <p>Number of cards: 10</p>
      </div>
      
      <Card />
      
    </main>
  )
}
