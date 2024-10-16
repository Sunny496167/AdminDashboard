import React from 'react'
import { Header } from '../components'
import { ColumnDirective, ColumnsDirective, Edit, Filter, GridComponent, Inject, Page, Selection, Sort, Toolbar,} from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 md:p-10 p-2 bg-white rounded-3xl'>
      <Header category='page' title='Customers' />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{allowDeleting: true, allowEditing: true}}
        width="auto"
      >
        <ColumnsDirective >
          {customersGrid.map((item, index) =>(
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Sort, Filter, Edit, Selection]} />
      </GridComponent>
    </div>
  )
}

export default Customers