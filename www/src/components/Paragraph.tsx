import {styled} from '@stitches/react'
import {theme} from '../../theme'

export const Paragraph = styled('span', {
  lineHeight: '1.3',
  margin: '0',
  fontFamily: theme.fonts.latMedStd,
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',
  color: theme.colors.slateA8,

  variants: {
    size: {
      '1': {
        fontSize: '12px',
      },
      '2': {
        fontSize: '13px',
      },
      '3': {
        fontSize: '14px',
      },
      '4': {
        fontSize: '15px',
      },
      '5': {
        fontSize: '$5',
        letterSpacing: '-.015em',
      },
      '6': {
        fontSize: '$6',
        letterSpacing: '-.016em',
      },
      '7': {
        fontSize: '$7',
        letterSpacing: '-.031em',
        textIndent: '-.005em',
      },
      '8': {
        fontSize: '$8',
        letterSpacing: '-.034em',
        textIndent: '-.018em',
      },
      '9': {
        fontSize: '$9',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
    },

    bold: {
      true: {
        fontWeight: 'bold',
      },
    },
  },
  defaultVariants: {
    size: '3',
  },
})
