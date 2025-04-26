import React from 'react';
import useTheme from '../Contex/Theme';

export default function ThemeBtn() {
    
const {themeMode,lightTheme,darkTheme}=useTheme()
   
const onChangeBtn = (e) => {
const dardModeStates=e.currentTarget.checked
if(dardModeStates){
darkTheme()
}else{
lightTheme()
}


}
return (
        <label className="inline-flex relative items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <div className="peer after:top-[2px] after:left-[2px] after:absolute bg-gray-200 after:bg-white dark:bg-gray-700 peer-checked:bg-blue-600 after:border after:border-gray-300 dark:border-gray-600 peer-checked:after:border-white rounded-full after:rounded-full peer-focus:outline-none dark:peer-focus:ring-blue-800 peer-focus:ring-4 peer-focus:ring-blue-300 w-11 after:w-5 h-6 after:h-5 after:content-[''] after:transition-all peer-checked:after:translate-x-full"></div>
            <span className="ml-3 font-medium text-gray-900 text-sm">Toggle Theme</span>
        </label>
    );
}

