

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import "./GenericFormInput.css"
import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'

const GenericFormInput = ({label, placeholder, name, type, description, required}) => {
    if (type === 'text') {
        return(
            <div>
            
            <FormField
                control={Form.control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                       <div>
                       <FormLabel>{label}</FormLabel>
                        {required && <span className='text'>*</span>}
                       </div>
                        <FormControl>
                            <Input placeholder={placeholder} {...field} />
                        </FormControl>
                        <FormDescription>{description}</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        
        </div>
        )
    
} else if (type === 'checkbox') {
    return(
        <div>
             <FormField
          control={Form.control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl >
                <Checkbox 
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none"></div>
             
            </FormItem>
          )}
        />
        </div>
    )
    
}
}

export default GenericFormInput
