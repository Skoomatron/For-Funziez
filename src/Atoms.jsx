import {atom, selector} from 'recoil';

export const divColor = atom({ // atoms handle your 'vanilla' state but can also hold functions
  key: 'mainColor',
  default: ['black'],
})

export const colorOverride = selector({  // Selectors handle derived state
  key: 'override',
  get: ({get}) => {

    const oldColor = get(divColor)

    if (oldColor[0] === 'green') {
      return 'http://placecorgi.com/260/180';
    }
  }
})