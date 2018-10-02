import React from 'react'

import { colors } from 'styles'

export default ({ color, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 50" {...props}>
    <path
      fill={colors[color] || color}
      fillRule="evenodd"
      d="M61.5625 5.9375c-1.9792 2.8125-4.0625 5-6.25 6.5625v1.5625c0 9.1667-3.2552 17.4479-9.7656 24.8438C39.0364 46.302 30.3126 50 19.375 50 12.2916 50 5.8334 48.125 0 44.375c.625.1042 1.6146.1563 2.9688.1563 5.8333 0 11.0937-1.823 15.7812-5.4688-2.7083-.1042-5.1562-.9635-7.3438-2.5781-2.1875-1.6146-3.6979-3.6719-4.5312-6.1719 1.0417.2083 1.823.3125 2.3438.3125 1.1458 0 2.2916-.1563 3.4375-.4688-2.9167-.5208-5.3386-1.953-7.2657-4.2968C3.4636 23.5156 2.5 20.8334 2.5 17.8125V17.5c2.0833 1.1458 3.9583 1.7188 5.625 1.7188-3.6459-2.5-5.4688-6.0417-5.4688-10.625 0-2.3959.5209-4.4792 1.5625-6.25 6.771 8.2292 15.4687 12.6041 26.0938 13.125-.2083-1.25-.3125-2.1875-.3125-2.8125 0-3.5417 1.224-6.5365 3.6719-8.9844C36.1198 1.2239 39.1146 0 42.6562 0c3.75 0 6.823 1.302 9.2188 3.9063 2.9167-.625 5.5729-1.6146 7.9688-2.9688-.9376 3.0208-2.7604 5.3125-5.4688 6.875 2.3959-.3125 4.7916-.9375 7.1875-1.875z"
    />
  </svg>
)
