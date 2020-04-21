# react-virtual-scroll-auto

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-virtual-scroll-auto.svg)](https://www.npmjs.com/package/react-virtual-scroll-auto) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-virtual-scroll-auto
```

## Usage

```jsx
import React from 'react'

import { VirtualScroll } from 'react-virtual-scroll-auto'

class Example extends Component {
  render() {
    return <VirtualScroll
       items={items}                /* array of children */
       itemCount={items.length}     /* quantity of children */
       rowHeight={50}               /* row basic height */
       containerHeight={200}        /* container height */
    />
  }
}
```

## License

MIT © [Mikhe](https://github.com/Mikhe)
