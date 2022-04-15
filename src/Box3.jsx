import React from 'react';
import {useRecoilValue, useRecoilState} from 'recoil';
import {divColor, colorOverride} from './Atoms.jsx';

const Box3 = () => {

  const [divColorValue, setDivColor] = useRecoilState(divColor) // atom value/set method

  const colorSwitch = useRecoilValue(colorOverride) // selector value

  const button3 = () => {
    setDivColor(['green'])
  }

  return (
    <div>
      <div onClick={() => {button3()}} style={{fontSize: 100, margin: 5, backgroundColor: divColorValue[0], height: '300px', width: '300px'}}>Box 3</div>
      <div style={{fontSize: 80, backgroundSize: 'cover', margin: 5, top: '10%', left: '40%', position: 'absolute',
        backgroundImage: `url(${colorSwitch})`, height: '600px', width: '600px'}}>Selector</div>
    </div>
  )
}

export default Box3;