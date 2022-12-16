import {styled} from '@stitches/react'
import {theme} from '../../theme'

export const StyledButton = styled('button', {
  all: 'unset',
  transition: 'all 250ms ease-in-out',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',

  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  fontFamily: theme.fonts.latMedStd,

  fontVariantNumeric: 'tabular-nums',

  boxShadow: `inset 0 0 0px 1px ${theme.colors.slateA2}`,

  backgroundColor: theme.colors.slateA2,
  position: 'relative',
  color: theme.colors.slateA11,

  '&:hover': {
    backgroundColor: theme.colors.slateA4,
  },

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      icon: {
        fontSize: 13,
        borderRadius: 8,

        paddingLeft: 12,
        paddingRight: 16,
        paddingTop: 5,
        paddingBottom: 5,
      },
      '1': {
        fontSize: 13,
        borderRadius: 8,
        padding: '6px 14px',
      },
      '2': {
        borderRadius: 50,
        fontSize: 13,
        fontWeight: 500,
        margin: 0,
        height: 32,
        width: 'max-content',
        paddingLeft: 14,
        paddingRight: 14,
      },
    },

    color: {
      primary: {},
    },

    // state....
  },
  defaultVariants: {
    size: '1',
  },
})

export const Button = StyledButton

Button.displayName = 'Button'
