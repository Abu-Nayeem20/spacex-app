import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SpaceLaunch from './Components/SpaceLaunch/SpaceLaunch';

function App() {
  return (
    <div>
      <Header></Header>
      <SpaceLaunch></SpaceLaunch>
      <h2>Hello World!</h2>
      <Footer></Footer>
    </div>
  );
}

export default App;
