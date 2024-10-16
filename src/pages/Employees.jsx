import React from 'react'
import { Header } from '../components'
import { ColumnDirective, ColumnsDirective, Search, GridComponent, Inject, Page, Toolbar} from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid} from '../data/dummy'

const Employees = () => {
  return (
    <div className='m-2 md:m-10 md:p-10 p-2 bg-white rounded-3xl'>
      <Header category='page' title='Employees' />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective >
          {employeesGrid.map((item, index) =>(
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees