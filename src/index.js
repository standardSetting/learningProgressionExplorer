import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './tachyons.css'
import './index.css'

import LayerOne from './LayerOne';
import LayerTwoA from './LayerTwoA'
import LayerTwoB from './LayerTwoB';
import LayerTwoC from './LayerTwoC';
import LayerTwoD from './LayerTwoD';
import LayerTwoE from './LayerTwoE';
import LayerTwoF from './LayerTwoF';
import LayerTwoG from './LayerTwoG';
import AccessPage from './AccessPage'


import NavigateLayers from './NavigateLayers';
import ZoomLayers from './ZoomLayers';


function App() {

  const [canAccess, setCanAcces] = useState(false)
  const [layerDisplayCode, setLayerDisplayCode] = useState('L1')
  
  return (
    <>
    {!canAccess &&
      <AccessPage setCanAcces={setCanAcces}/>
    }

    {canAccess &&
    <div>
      <div style={{position:'fixed',top:'0px'}}>
        <NavigateLayers setLayerDisplayCode={setLayerDisplayCode}/>
      </div>      
      {layerDisplayCode === 'L1' && <LayerOne />}
      {layerDisplayCode === 'L2A' && <LayerTwoA />}
      {layerDisplayCode === 'L2B' && <LayerTwoB />}
      {layerDisplayCode === 'L2C' && <LayerTwoC />}
      {layerDisplayCode === 'L2D' && <LayerTwoD />}
      {layerDisplayCode === 'L2E' && <LayerTwoE />}
      {layerDisplayCode === 'L2F' && <LayerTwoF />}
      {layerDisplayCode === 'L2G' && <LayerTwoG />}
    </div>}
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
