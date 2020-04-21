# react-virtual-scroll

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-virtual-scroll.svg)](https://www.npmjs.com/package/react-virtual-scroll) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-virtual-scroll
```

## Usage

```jsx
import React from 'react'

import { VirtualScroll } from 'react-virtual-scroll'

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
