import './App.css';
import Instagram from "./components/assets/svg/instagram"
import Discord from "./components/assets/svg/Discord"
import Linkdin from "./components/assets/svg/Linkdin"
import Twitter from "./components/assets/svg/Twitter"
import Youtube from "./components/assets/svg/Youtube"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='d-flex'>
      <Instagram />
      <Discord />
      <Linkdin />
      <Twitter />
      <Youtube/>
    </div>
  );
}

export default App;
