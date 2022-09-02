import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 122.88"
    {...props}
  >
   <path
      d="M69.6 51.38h11a2.9 2.9 0 0 1 2.4 4.51l-26.22 44.78a2.89 2.89 0 0 1-5.3-2.07l3.87-27.48-13.05.22a2.88 2.88 0 0 1-2.93-2.83 3 3 0 0 1 .4-1.51l25.82-44.77a2.89 2.89 0 0 1 5.34 1.87L69.6 51.38Z"
    />
  </svg>
)

export default SvgComponent
