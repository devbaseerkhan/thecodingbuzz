import {SourceCodePro, SpaceMono, SplineSansMono} from 'next/font/local'

export const sourceCodePro = SourceCodePro({
    src: [
      {
        path: '../../public/fonts/SourceCodePro-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../../public/fonts/SourceCodePro-Medium.ttf',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../../public/fonts/SourceCodePro-SemiBold.ttf',
        weight: '600',
        style: 'normal',
      },
      {
        path: '../../public/fonts/SourceCodePro-Bold.ttf',
        weight: '700',
        style: 'normal',
      },
    ],
  })
  
  export const spaceMono = SpaceMono({
    src: [
      {
        path: '../../public/fonts/SpaceMono-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../../public/fonts/SpaceMono-Bold.ttf',
        weight: '700',
        style: 'normal',
      },
    ],
  })

  export const splineSansMono = SplineSansMono({
    src: [
      {
        path: '../../public/fonts/SplineSansMono-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
    ],
  })