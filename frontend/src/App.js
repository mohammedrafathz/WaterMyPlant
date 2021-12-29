import './App.css';
import Navbar from './components/Navbar';
import PlantList from './components/PlantList';
import {useSelector} from 'react-redux'
import Spinner from './components/Spinner';

import CustomAlert from './components/CustomAlert';

function App() {
  const {plants} = useSelector(state => state.plant);

  const renderAlerts = () => {
    const alerts = plants.map(p => {
      let currentTime = new Date();
      let lastWateredTime = new Date(p.lastWateredAt);

      let hours = Math.abs(currentTime - lastWateredTime) / 36e5

      if (hours >= 6) {
        return <CustomAlert message={`${p.plantName} was not been watered for ${(hours + "").split(".")} hours`} />
      } else {
        return null
      }

    });

    return alerts
  }

  return (
    <div className='container'>
      <Spinner />
      {renderAlerts()}
      <Navbar />
      <PlantList />
    </div>
  );
}

export default App;
