
import './App.css';
import Header from './components/header/Header'
import Badge from './components/badge/Badge'
import Carousel from './components/carousel/Carousel'
import Pagination from './components/pagination/Pagination'
import Modal from './components/modal/Modal'
import Offcanvas from './components/offcanvas/Offcanvas'
import OffCanvasExample from './components/offcanvas/Offcanvas'
import MyImage from './components/images/Images'
import Accordion from './components/accordion/Accordion'
// import Caro from './components/chatgptcarousel/ChatGptCaro'

function App() {
  return (
    <div className="App">
        <Header />
        <Offcanvas />
        <Badge />
        <MyImage />
        <Carousel />
        <Pagination />
        <Modal />
        <OffCanvasExample />
        <Accordion />
    </div>
  );
}
export default App;




