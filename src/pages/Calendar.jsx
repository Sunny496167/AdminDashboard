import React from 'react'
import { Header } from '../components'
import { Agenda, Day, DragAndDrop, Inject, Month, Resize, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule'
import { scheduleData } from '../data/dummy'
const Calendar = () => {
  return (
    <div className='m-2 md:m-10 md:p-10 p-2 bg-white rounded-3xl'>
      <Header category='App' title='Calendar' />
      <ScheduleComponent 
        height='650px'
        eventSettings={{dataSource: scheduleData}}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, Month, Agenda, WorkWeek, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}
export default Calendar