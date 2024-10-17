import React from 'react'
import Input from './Input/Input'

interface RatingProps {
    handleFilterChange: (name: string, value: string) => void;
}

const Rating: React.FC<RatingProps> = ({ handleFilterChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFilterChange('score', e.target.value);
    };

  return (

    <div>
        <h2 className="text-xl font-bold mb-2" >Movie Rating</h2>
        <div className="space-y-2">
            <label className="block relative pl-[35px] mb-[12px] 
                            cursor-pointer select-none">
                <input 
                    className="form-radio text-blue-500" 
                    type='radio' value={""} name="score" onChange={handleChange}/>
                <span className=""> </span>All
            </label>
            <Input
                handleFilterChange={(name, value) => handleFilterChange(name, value)}
                value="7-10" 
                title="7 to 10" 
                name="score"/>
            <Input 
                handleFilterChange={(name, value) => handleFilterChange(name, value)}
                value="3-7" 
                title="3 to 7" 
                name="score"/>
            <Input 
                handleFilterChange={(name, value) => handleFilterChange(name, value)}
                value="0-3" 
                title="0 to 3" 
                name="score"/>
        </div>
    </div>

  )
}

export default Rating