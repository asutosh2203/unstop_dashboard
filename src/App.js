import './App.css';
import {
  Header,
  Sidebar,
  Overlay,
  Banner,
  AssessmentList,
} from './Components/index';
import { useRecoilValue } from 'recoil';
import { sidebarAtom } from './recoil/atoms';

const App = () => {
  console.log('rendering');

  const isSidebarActive = useRecoilValue(sidebarAtom);

  return (
    <div className='App'>
      <Sidebar />
      {isSidebarActive && <Overlay />}
      <div className='app_body'>
        <Header />
        <Banner />
        <AssessmentList />
      </div>
    </div>
  );
};

export default App;
