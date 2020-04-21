import React, { useState } from 'react'

import { VirtualScroll } from 'react-virtual-scroll'

const lowHeightItems = Array(1000).fill(true).map((_, i) => (
  <div key={i} style={{ height: '50px' }}>{`Element #${i}`}</div>
))

const hugeItems = Array(1000).fill(true).map((_, i) => (
  <div key={i} style={{ height: '100px' }}>{`Element #${i}`}</div>
))

const App = () => {
  const [items, setItems] = useState(lowHeightItems);
  const handleClick = () => {
    setItems(hugeItems);
  }

  return <>
      <section style={{ width: '50%', margin: '0 auto', minWidth: '300px' }}>
        <article>

          <header>
            <h2>Push button to change rows height</h2>
          </header>

          <VirtualScroll items={items} itemCount={items.length} rowHeight={50} containerHeight={200} />

          <button onClick={handleClick}>Expand rows</button>

        </article>
      </section>
  </>
}

export default App
