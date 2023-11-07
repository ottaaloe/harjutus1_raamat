import img_raamat from './H2G2_UK_front_cover.jpg';
import './App.css';

function Raamat() {
  return (
    <div className="App">
      <div className="App-Raamat"><img src={img_raamat} className="raamat"  alt="Kaanepilt" /></div>
      <div className="App-Sisu"> 
        <li><strong>The Hitchhiker's Guide to the Galaxy</strong></li>
        <li>Autor: Douglas Adams</li>
        <li>Aasta: 1978</li>
        <Sisu />
       </div>
      
    </div>
    
  );
}

function Sisu() {
  return (
      <div>
        <p>
        A comedy science fiction franchise created by Douglas Adams. 
        Originally a 1978 radio comedy broadcast on BBC Radio 4, it was later adapted to other formats, including novels, stage shows, comic books, a 1981 TV series, a 1984 text adventure game, and 2005 feature film.
        </p>
        <p>
        The Hitchhiker's Guide to the Galaxy is an international multimedia phenomenon; the novels are the most widely distributed, having been translated into more than 30 languages by 2005
        </p>
        </div>
  );
}

export default Raamat;

