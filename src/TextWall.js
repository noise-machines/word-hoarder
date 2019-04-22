import React from 'react'

const lorem = copies => {
  const text =
    'Etiam eget augue fermentum placerat lorem a imperdiet ligula Mauris tincidunt tellus vitae est semper eu tincidunt lorem mollis Suspendisse rutrum justo vitae euismod fermentum est ipsum suscipit quam at volutpat lacus felis nec lorem Sed sed quam quis nibh vestibulum dignissim Cras in pellentesque libero Sed faucibus ipsum id lacinia viverra arcu quam rutrum elit quis porta risus felis sit amet lectus Curabitur ac ante sem Sed bibendum enim quis nulla lobortis varius Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla vel dolor sit amet ante posuere maximus non ac leo Aliquam fermentum luctus tempus Praesent vitae nunc vel dui dictum pharetra gravida id libero Suspendisse iaculis convallis condimentum Fusce dapibus urna eu augue hendrerit blandit Integer sit amet dui in metus mattis ornare Pellentesque ultrices risus et euismod suscipit tortor diam iaculis nunc ut condimentum turpis diam nec diam'
  let output = ''
  for (let i = 0; i < copies; i++) {
    output += ' ' + text
  }
  return output
}

export default () => {
  return <div className='background'>{lorem(500)}</div>
}
