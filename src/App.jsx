import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="">
            <TooltipComponent content="Settings" position="Top">
              <button>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
