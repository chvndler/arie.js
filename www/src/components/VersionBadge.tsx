import packageJSON from '../../../package.json'
import {styled} from '@stitches/react'

export const VersionBadge = () => {
  return (
    <>
      <StyledBadge>v{packageJSON.version}</StyledBadge>
    </>
  )
}

const styledBadge = styled('div', {
  textTransform: 'uppercase',
  fontSize: 10,
  boxSizing: 'border-box',
  display: 'flex',
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 5,
  paddingBottom: 5,
  margin: 'auto',
  backgroundColor: 'transparent',
  color: 'lightgray',
})

const StyledBadge = styled(styledBadge)
