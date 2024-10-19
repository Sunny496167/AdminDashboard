import {ChartComponent, DateTime, Inject, Legend, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries} from '@syncfusion/ej2-react-charts'
import React from 'react'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../components'

const Area = () => {
  const {currentMode} = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title="Inflation Rate in Percentage" />
      <div className='w-full'>
      <ChartComponent
      id='area-chart'
      height='420px'
      width='100%'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{border: {width: 0}}}
      background={currentMode === "Dark" ? '#33373E' : ''}
      >
      <Inject services={[SplineAreaSeries, Legend, DateTime]} />
      <SeriesCollectionDirective >
        {areaCustomSeries.map((item, index) =>
        <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
      </div>
    </div>
  )
}

export default Area
