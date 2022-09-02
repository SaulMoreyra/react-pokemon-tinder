import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 107.39"
    {...props}
  >
    <path
      d="M60.83 17.18c8-8.35 13.62-15.57 26-17 23.17-2.64 44.44 21.08 32.74 44.43-3.33 6.65-10.11 14.56-17.61 22.32-8.23 8.52-17.34 16.87-23.72 23.2l-17.4 17.26-14.38-13.84C29.16 76.89 1 55.92 0 29.94-.63 11.74 13.73.08 30.25.29c14.76.2 21 7.54 30.58 16.89Z"
    />
  </svg>
)

export default SvgComponent
