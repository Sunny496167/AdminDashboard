import React from 'react'
import { Header } from '../components'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

const ColorPicker = () => {

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

  return (
    <div className='m-2 md:m-10 md:p-10 p-2 bg-white rounded-3xl'>
      <Header category='App' title='Color Picker' />
      <div className='text-center'>
        <div id='preview'/>
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent 
              id='inline-palette'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent 
              id='inline-picker'
              mode='Picker'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
