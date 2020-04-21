import React, { useEffect, useRef, useState } from 'react'

const useScrollAware = () => {
  const [scrollTop, setScrollTop] = useState(0)
  const ref = useRef(null)
  const onScroll = (e) =>
    requestAnimationFrame(() => {
      setScrollTop(e.target.scrollTop)
    })

  useEffect(() => {
    const scrollContainer = ref.current

    if (scrollContainer) {
      setScrollTop(scrollContainer.scrollTop)
      scrollContainer.addEventListener('scroll', onScroll)
      return () => scrollContainer.removeEventListener('scroll', onScroll)
    }
  }, [])

  return [scrollTop, ref]
}

export const VirtualScroll = ({
  items,
  itemCount,
  containerHeight,
  rowHeight
}) => {
  const [scrollTop, ref] = useScrollAware()
  const [innerHeight, setInnerHeight] = useState(0)
  const [totalContentHeight, setTotalContentHeight] = useState(
    itemCount * rowHeight
  )
  const innerRef = useRef(null)
  const visibleNodesCount = Math.ceil(containerHeight / rowHeight)
  const startNode = Math.min(
    Math.max(0, Math.floor(Number(scrollTop) / rowHeight)),
    itemCount - visibleNodesCount
  )
  const offsetY = startNode * rowHeight
  const visibleChildren = Array(visibleNodesCount)
    .fill(true)
    .map((_, index) => items[index + startNode])

  useEffect(() => {
    if (innerRef && innerRef.current && innerRef.current.offsetHeight) {
      const { offsetHeight } = innerRef.current

      if (offsetHeight && offsetHeight !== innerHeight) {
        setInnerHeight(offsetHeight)

        if (innerHeight !== 0) {
          setTotalContentHeight(totalContentHeight + offsetHeight - innerHeight)
        }
      }
    }
  }, [innerHeight, totalContentHeight, visibleChildren])

  return (
    <div style={{ height: containerHeight, overflow: 'auto' }} ref={ref}>
      <div style={{ height: totalContentHeight, overflow: 'hidden' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }} ref={innerRef}>
          {visibleChildren}
        </div>
      </div>
    </div>
  )
}
