import {useState} from "react";

const Checkbox = ({label}) => {
  const [isChecked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <div className='flex items-center gap-2'>
      <input id={label} type='checkbox' onChange={handleChange}
             className='h-4 w-4 appearance-none border-2 rounded-xs text-neutral-400
             hover:text-purple-700 hover:cursor-pointer
             focus:outline-none focus:ring focus:ring-purple-300 focus:text-purple-700
             checked:text-purple-600 checked:bg-purple-600
             checked:hover:bg-purple-700 checked:hover:text-purple-700
             checked:focus:bg-purple-700 checked:focus:text-purple-700'
        />

      {isChecked &&
        <div className='ml-0.5 absolute pointer-events-none'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={3} stroke='#fff' className='w-3 h-3'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'/>
          </svg>
        </div>
      }

      <label htmlFor={label} className='text-sm text-neutral-700'>{label}</label>
    </div>
  );
};

export default Checkbox;