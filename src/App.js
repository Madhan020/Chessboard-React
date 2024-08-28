import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChessKing, 
  faChessQueen, 
  faChessRook, 
  faChessBishop, 
  faChessKnight, 
  faChessPawn 
} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td className='g'><FontAwesomeIcon icon={faChessRook} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessKnight} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessBishop} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessQueen} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessKing} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessBishop} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessKnight} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessRook} /></td>
        </tr>
        <tr>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} /></td>
        </tr>
        <tr>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
        </tr>
        <tr>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
        </tr>
        <tr>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
        </tr>
        <tr>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} /></td>
        </tr>
        <tr>
          <td className='g'><FontAwesomeIcon icon={faChessRook} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessKnight} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessBishop} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessQueen} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessKing} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessBishop} /></td>
          <td className='g'><FontAwesomeIcon icon={faChessKnight} /></td>
          <td className='w'><FontAwesomeIcon icon={faChessRook} /></td>
        </tr>
      </table>
    </div>
  );
}

export default App;