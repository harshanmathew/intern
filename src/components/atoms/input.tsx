'use client';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const Input: React.FC<InputTypes> = ({
  rootClass,
  inputClass,
  labelIcon,
  label,
  maxCharAllowed,
  labelClass,
  required = true,
  ...props
}) => {
  // const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const [charCount, setCharCount] = useState(0);
  const [value, setValue] = useState('');

  // This function will update the character count whenever the input value changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    if (maxCharAllowed) {
      const charCount = event.target.value.length;
      if (charCount <= maxCharAllowed) {
        setCharCount(charCount);
        setValue(currentValue);
      }
    } else {
      setValue(currentValue);
    }
  };

  return (
    <div className={rootClass}>
      <label>
        <div className='pb-2 flex items-center justify-between'>
          <div className='flex items-center gap-x-2 pl-2'>
            {labelIcon}
            <span
              className={cn(
                'ml-1 text-base lg:text-lg leading-none',
                labelClass
              )}
            >
              {label} {required && <sup className='ml-[-10px]'>*</sup>}
            </span>
          </div>
          {maxCharAllowed && (
            <span>
              {charCount}/{maxCharAllowed}
            </span>
          )}
        </div>
        <input
          className={cn(
            'w-full h-[45px] lg:h-[50px] rounded-[10px] text-lg lg:text-xl outline-primary px-3 lg:px-5 text-left border border-primary/50 text-white bg-input',
            inputClass
          )}
          max={maxCharAllowed}
          onChange={handleInputChange}
          value={value}
          {...props}
        />
      </label>
    </div>
  );
};

export default Input;
