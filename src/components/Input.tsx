import { forwardRef, RefObject } from 'react';

type InputBoxType = {
  input_type: string,
  label_content: string,
  name: string,
  pattern?: string
}

const Input =  forwardRef(({input_type, label_content, name, pattern}: InputBoxType, ref: React.LegacyRef<HTMLInputElement>) => {
  return (
    <div className='inputbox'>
        <div className='rflabel-wrapper'>
          <label className='rflabel' htmlFor={name}>{label_content}</label>
        </div>
        <div className='inp-box'>
            <input className='inp' pattern={pattern} type={input_type} name={name} ref={ref} />
        </div>
    </div>
  )
})

export default Input