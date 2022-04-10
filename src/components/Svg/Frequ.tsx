import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { ThemeColors } from "../../Constants"

function FrequSVG(props) {
  return (
    <Svg
      width={106}
      height={55}
      viewBox="0 0 106 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M207.707 26.727h-37.323a2.304 2.304 0 00-2.203 1.623l-4.13 13.387-4.902-39.718a2.304 2.304 0 00-4.43-.565l-9.107 23.021-5.137-5.162a2.31 2.31 0 00-2.66-.432 2.29 2.29 0 00-.746.592l-6.157 7.449h-15.626a2.293 2.293 0 00-.922-.195H77.049a2.307 2.307 0 00-2.204 1.607l-4.129 13.388-4.902-39.703a2.302 2.302 0 00-1.996-2 2.307 2.307 0 00-2.434 1.435l-9.107 23.021-5.168-5.162a2.306 2.306 0 00-3.407.16l-6.16 7.449H2.305A2.306 2.306 0 000 29.224a2.3 2.3 0 002.305 2.302h36.33a2.308 2.308 0 001.778-.835l5.235-6.333 5.86 5.853a2.306 2.306 0 003.77-.78l7.066-17.875 5.114 41.434A2.3 2.3 0 0069.54 55h.203a2.306 2.306 0 002.2-1.623l6.809-22.046h15.993c.29.128.605.194.922.195h36.331a2.304 2.304 0 001.778-.835l5.234-6.333 5.86 5.853a2.303 2.303 0 003.11.133c.292-.245.519-.56.66-.913l7.075-17.871 5.074 41.415a2.302 2.302 0 002.082 2.01h.204a2.304 2.304 0 002.199-1.624l6.801-22.042h35.62A2.307 2.307 0 00210 29.017a2.302 2.302 0 00-2.305-2.302l.012.012z"
        fill={ThemeColors.secondryColor}
      />
    </Svg>
  )
}

export default FrequSVG