import React from 'react'
import { Header } from '../components'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'

const Editor = () => {
  return (
    <div className='m-2 md:m-10 md:p-10 p-2 bg-white rounded-3xl'>
      <Header category='App' title='Editor' />
      <RichTextEditorComponent
      placeholder='Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.
      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz. '
      >
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor