import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Table from '../react'

// const appearanceStory = storiesOf('example', module)
//   .addDecorator(themeDecorator(addons))
//   .add('everything', _ => {
//     return (
//       <Table>
//         <Table.Header>
//           <Table.Column sortable>Name</Table.Column>
//         </Table.Header>
//         <Table.Row>
//           <Table.Cell emphasis grow={3}>
//             asdf
//           </Table.Cell>
//           <Table.Cell align="center">asdf</Table.Cell>
//           <Table.Cell>asdf</Table.Cell>
//           <Table.Cell>asdf</Table.Cell>
//         </Table.Row>
//         <Drawer
//           base={
//             <Table.Row>
//               <Table.Cell>asdf</Table.Cell>
//               <Table.Cell>asdf</Table.Cell>
//               <Table.Cell>asdf</Table.Cell>
//               <Table.Cell>asdf</Table.Cell>
//             </Table.Row>
//           }
//         >
//           in the panel
//         </Drawer>
//       </Table>
//     )
//   })

const tableStory = storiesOf('table', module)
  .addDecorator(themeDecorator(addons))
  .add('empty', _ => <Table />)

const rowStory = storiesOf('row', module).add('one row, empty', _ => (
  <Table>
    <Table.Row />
  </Table>
))

const cellStory = storiesOf('cell', module)
  .addDecorator(themeDecorator(addons))
  .add('empty', _ => (
    <Table>
      <Table.Row>
        <Table.Cell />
      </Table.Row>
    </Table>
  ))
  .add('text', _ => (
    <Table>
      <Table.Row>
        <Table.Cell>Cell text</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('multiple text', _ => (
    <Table>
      <Table.Row>
        <Table.Cell>Cell 1 text</Table.Cell>
        <Table.Cell>Cell 2 text</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('emphasis text', _ => (
    <Table>
      <Table.Row>
        <Table.Cell emphasis>Cell text</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('flex 1 | 4', _ => (
    <Table>
      <Table.Row>
        <Table.Cell flex="1">
          Flex 1 Flex 1 Flex 1 Flex 1 Flex 1 Flex 1 Flex 1 Flex 1
        </Table.Cell>
        <Table.Cell flex="4">
          Flex 4 Flex 4 Flex 4 Flex 4 Flex 4 Flex 4 Flex 4 Flex 4
        </Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('flex 2 | 1', _ => (
    <Table>
      <Table.Row>
        <Table.Cell flex="2">Flex 2</Table.Cell>
        <Table.Cell flex="1">Flex 1</Table.Cell>
      </Table.Row>
    </Table>
  ))
Object.keys(Table.cellAligns).forEach(align => {
  cellStory.add(`align ${align}`, _ => (
    <Table>
      <Table.Row>
        <Table.Cell align={align}>Cell aligned {align}</Table.Cell>
      </Table.Row>
    </Table>
  ))
})

const columnHeaderStory = storiesOf('columnHeader', module)
  .addDecorator(themeDecorator(addons))
  .add('empty', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort />
      </Table.Row>
    </Table>
  ))
  .add('text', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader>header text</Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
  .add('sort default', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort>header text</Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
Object.keys(Table.columnHeaderSorts).forEach(sort =>
  columnHeaderStory.add(`sort ${sort}`, _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort={sort}>sorted header</Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
)
