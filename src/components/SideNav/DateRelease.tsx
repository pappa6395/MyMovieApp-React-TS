import React from 'react'
import Input from './Input/Input'

interface DateReleaseProps {
  handleFilterChange: (name: string, value: string) => void;
 
}

const DateRelease: React.FC<DateReleaseProps> = ({ handleFilterChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange('releaseDate', e.target.value);
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2" >Date Releasing</h2>
        <div className="space-y-2">
            <label className="block relative pl-[35px] mb-[12px] 
                            cursor-pointer select-none">
                <input 
                    className="form-radio text-blue-500" 
                    type='radio' value="" name="releaseDate" onChange={handleChange}/>
                <span className=""> </span>All
            </label>
            <Input 
              handleFilterChange={(name, value) => handleFilterChange(name, value)}
              value="2024" 
              title="2024"
              name="releaseDate"/>
            <Input 
              handleFilterChange={(name, value) => handleFilterChange(name, value)}
              value="2023"
              title="2023" 
              name="releaseDate"/>
            <Input 
              handleFilterChange={(name, value) => handleFilterChange(name, value)}
              value="2022"
              title="2022" 
              name="releaseDate"/>
            <Input 
              handleFilterChange={(name, value) => handleFilterChange(name, value)}
              value="2021"
              title="2021" 
              name="releaseDate"/>
            <Input 
              handleFilterChange={(name, value) => handleFilterChange(name, value)}
              value="2020 & Before"
              title="2020 & Before" 
              name="releaseDate"/>
        </div>
    </div>
  )
}

export default DateRelease