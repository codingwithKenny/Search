  import { Form } from '@/components/ui/form'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Input from './input'
import GenericFormInput from '@/shared/GenericFormInput'
import {zodResolver} from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
  
  const Index = () => {
      
    const formSchema = z. object({
        title: z.string('title must be a string' ).min(2).max(20),
        description: z. string( 'description must be a string').min(2),
        price: z. string('price must be a string'),
       category: z.string(' category must be a string').min(2). nullable(),
        agree: z.boolean().default(false).optional()

    })

    const form = useForm({
      resolver : zodResolver(formSchema),
      
    })
    
  //  console.log('error',form.formState.errors);

   function onSubmit(data) {
      console.log(data)
      alert('form submitted')
    
   }


    return (
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}> 
          {
            Input.map((Input,i)=>{
              return(
                <GenericFormInput key={i} form={form} {...Input}/>
              )
            })
          }
          <Button type='submit'>submit</Button>
          </form>
        </Form>
      </div>
    )
  }
  
  export default Index
  
