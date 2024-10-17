import React from 'react'

interface InputProps {
  handleFilterChange: (name: string, value: string) => void;
  value: string | number;
  name: string;
  title: string;
}

const Input: React.FC<InputProps> = ({ 
  handleFilterChange, value, name, title }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFilterChange(name,e.target.value)
    }
  return (
    <div>
        <label className="flex items-center relative pl-[35px] mb-[12px] 
                        cursor-pointer select-none">
            <input 
                onChange={handleChange} 
                type="radio" 
                value={value} 
                name={name}
                className=""/>
            <span className="ml-1"></span>{title}
        </label>
    </div>
  )
}

export default Input