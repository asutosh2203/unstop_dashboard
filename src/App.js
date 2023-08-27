import './App.css';
import { Header, Sidebar } from './Components/index';
import { useRecoilValue } from 'recoil';
import { sidebarAtom } from './recoil/atoms';
import Overlay from './Components/Overlay/Overlay';

const App = () => {
  console.log('rendering');

  const isSidebarActive = useRecoilValue(sidebarAtom);

  return (
    <div className='App'>
      <Sidebar />
      {isSidebarActive && <Overlay />}
      <div className='app_body'>
        <Header />
      </div>
    </div>
  );
};

export default App;
