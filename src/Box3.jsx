import React from 'react';
import {useRecoilValue, useRecoilState} from 'recoil';
import {divColor, colorOverride} from './Atoms.jsx';

const Box3 = () => {

  const [divColorValue, setDivColor] = useRecoilState(divColor) // atom value/method
  const colorSwitch = useRecoilValue(colorOverride) // selector value

  const button3 = () => {
    setDivColor(['green'])
  }

  return (
    <div>
      <div onClick={() => {button3()}} style={{margin: 5, backgroundColor: divColorValue[0], height: '300px', width: '300px'}}>Box 3</div>
      <div style={{margin: 5, backgroundColor: colorSwitch, height: '300px', width: '300px'}}></div>
    </div>
  )
}

export default Box3;