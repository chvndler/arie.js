# `ARIE®`

<a href="https://arie.chvndler.ch">
  <img width="1080" alt="connectkit" src="https://s3.amazonaws.com/truth.cloud/assets/ARIE%C2%A9.png">
</a>

A small component for displaying different data based on user scroll and pointer position.

`v0.0.4-beta.1`

## Start

```yarn
yarn add arie-js
```

```pnpm
pnpm install --save arie-js
```

```npm
npm install --save arie-js
```

## Usage

`default arie`

```tsx
import React from 'react'
import {useArie} from 'arie-js'

export const DefaultExample = () => {
  const {
    position: {client},
  } = useArie()
  return (
    <>
      <div>
        <div>X.{client.x && client.x.toExponential(2)}</div>
        <div>Y.{client.y && client.y.toPrecision(6)}</div>
      </div>
    </>
  )
}
```

`arie angle`

```tsx
import React from 'react'
import {useArie} from 'arie-js'

export const AngleExample = () => {
  const {
    selectedElement: {
      position: {angle},
    },
  } = useArie(true, 'trackElement')
  return (
    <>
      <div className="row">{angle ? <div>{angle.toFixed(0)}°</div> : <div>0°</div>}</div>

      <div id="trackElement" />
    </>
  )
}
```

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.

`© MIT CHANDLER CHAPPELL`
