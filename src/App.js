import Header from './components/Header';
import Meme from './components/Meme';
import './App.css';
import Data from './memesData';
function App() {

  let memeData= Data.data.memes

  return (
    <>
    <Header />
    <Meme memesData={memeData}/>
    </>
    )
}

export default App;
