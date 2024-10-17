import React from 'react'
import Input from './Input/Input'

interface CategoryProps {
    handleFilterChange: (name: string, value: string) => void;
   
}

const Category: React.FC<CategoryProps> = ({ handleFilterChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFilterChange('category', e.target.value)
    }
  return (
    <div>
        <h2 className="text-xl font-bold mb-2 mt-[-5px]" >Category</h2>
                <div className="space-y-2">
                    <label className="block relative pl-[35px] mb-[12px] 
                        cursor-pointer select-none">
                        <input 
                            className="" 
                            type='radio' 
                            value={""} 
                            name="category" 
                            onChange={handleChange}/>
                        <span className=""> </span>All
                    </label>
                    <Input 
                        handleFilterChange={(name, value) => handleFilterChange(name, value)}
                        value="Action"
                        title="Action"
                        name="category"/>
                    <Input 
                        handleFilterChange={(name, value) => handleFilterChange(name, value)}
                        value="Drama"
                        title="Drama"
                        name="category"/>
                    <Input 
                        handleFilterChange={(name, value) => handleFilterChange(name, value)}
                        value="Comedy"
                        title="Comedy"
                        name="category"/>
                    <Input 
                        handleFilterChange={(name, value) => handleFilterChange(name, value)}
                        value="Adventure"
                        title="Adventure"
                        name="category"/>
                    <Input 
                        handleFilterChange={(name, value) => handleFilterChange(name, value)}
                        value="Horror"
                        title="Horror"
                        name="category"/>
                    <Input 
                        handleFilterChange={(name, value) => handleFilterChange(name, value)}
                        value="Romance"
                        title="Romance"
                        name="category"/>
                    <Input 
                        handleFilterChange={(name, value) => handleFilterChange(name, value)}
                        value="Science Fiction"
                        title="Science Fiction"
                        name="category"/>
                    <Input 
                        handleFilterChange={(name, value) => handleFilterChange(name, value)}
                        value="Fantasy"
                        title="Fantasy"
                        name="category"/>
                    <Input 
                        handleFilterChange={(name, value) => handleFilterChange(name, value)}
                        value="Crime"
                        title="Crime"
                        name="category"/>
                </div>
    </div>
  )
}

export default Category