import * as React from 'react'
import { SVGProps } from 'react'

function SvgLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="fill-primary"
      height="800px"
      width="800px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 499.541 499.541"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M321.984 287.552l-43.008 211.989c.085-.149.235-.213.299-.363L416.15 225.429l-94.166 62.123z" />
      <path d="M411.008 203.264L250.325 2.411 318.933 264z" />
      <path d="M227.648 0L83.392 270.421 298.581 270.421z" />
      <path d="M84.843 291.755L257.749 496.747 299.349 291.755z" />
    </svg>
  )
}

export default SvgLogo
