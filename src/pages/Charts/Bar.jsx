import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../components'
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';

const Bar = () => {
  const {currentMode} = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Bar" title="Olympic Medal Counts - RIO" />
      <div className='w-full'>
      <ChartComponent
      id='bar-chart'
      height='420px'
      width='100%'
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{border: {width: 0}}}
      background={currentMode === "Dark" ? '#33373E' : ''}
      tooltip={{ enable: true }}
      >
      <Inject services={[ ColumnSeries, Legend, DataLabel, Tooltip, Category]} />
      <SeriesCollectionDirective >
        {barCustomSeries.map((item, index) =>
        <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
      </div>
    </div>
  )
}

export default Bar
