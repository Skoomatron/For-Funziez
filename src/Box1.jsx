import React from 'react';
import Box2 from './Box2.jsx';
import {useRecoilState} from 'recoil';
import {divColor} from './Atoms.jsx'

const Box1 = () => {
  const [divColorValue, setDivColor] = useRecoilState(divColor)

  const button1 = () => {
    setDivColor(['red'])
  }

  return (
    <div>
      <div onClick={() => {button1()}} style={{fontSize: 100, margin: 5, backgroundColor: divColorValue[0], height: '300px', width: '300px'}}>Box 1</div>
      <Box2/>
    </div>
  )
}

export default Box1;