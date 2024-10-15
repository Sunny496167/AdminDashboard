import { Category, ChartComponent, Inject, Legend, SeriesCollectionDirective, SeriesDirective, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import React from 'react'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

const Stacked = ({width, height}) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border: {width: 0}}}
      tooltip={{enable: true}}
      legendSettings={{background: 'white'}}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective >
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
