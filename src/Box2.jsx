import React from 'react';
import {useRecoilState} from 'recoil';
import {divColor} from './Atoms.jsx';
import Box3 from './Box3.jsx';

const Box2 = () => {
  const [divColorValue, setDivColor] = useRecoilState(divColor)

  const button2 = () => {
    setDivColor(['blue'])
  }

  return (
    <div>
      <div onClick={() => {button2()}} style={{margin: 5, backgroundColor: divColorValue[0], height: '300px', width: '300px'}}>Box 2</div>
      <Box3/>
    </div>
  )
}

export default Box2;