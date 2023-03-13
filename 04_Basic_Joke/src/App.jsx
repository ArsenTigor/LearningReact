import react from 'react' 
import './App.css'
import Joke from './component/joke'

export default function App() {
  let pun = true
  let no = 1 

  return (
    <div className="App">
      <Joke 
        number={no++}
        joke="I got my daughter a fridge for her birthday." 
        punchline="I can't wait to see her face light up when she opens it. "
        isPun={true}/>
      <Joke 
      number={no++}
      joke="I got my daughter a fridge for her birthday." 
      punchline="I can't wait to see her face light up when she opens it. "
      isPun={true}/>
        

    </div>
  )
}

// Setup: I got my daughter a fridge for her birthday.
// Punchline: I can't wait to see her face light up when she opens it.

// ---

// Setup: How did the hacker escape the police?
// Punchline: He just ransomware!

// ---

// Setup: Why don't pirates travel on mountain roads?
// Punchline: Scurvy.

// ---

// Setup: Why do bees stay in the hive in the winter?
// Punchline: Swarm.

// ---

// Setup: What's the best thing about Switzerland?
// Punchline: I don't know, but the flag is a big plus!
