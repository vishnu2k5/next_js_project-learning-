"use client";   

import React, { useState, useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { z } from "zod";
// import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { formSchema } from "@/lib/validation";
// import { createPitch } from "@/lib/actions";


const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});   
    const [pitch,setpitch]=useState("")
    const handleformsubmit = async (prevState:any,formData:FormData)=>{
        try {
         const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
        };
        await formSchema.parseAsync(formValues);
        // const result = await createPitch(prevState, formData, pitch);
        //  console.log(formValues)

        } catch (error) {
            
        } finally{

        }
    } 
    const [state,formAction,ispending] = useActionState(handleformsubmit,{error:"", status: "INITIAL"});

    
  return <form action={()=>{}}  className="max-w-2xl mx-auto bg-white my-10 space-y-8 px-6">
    <div>
        <label htmlFor="title" className="font-bold text-[18px] text-black uppercase">title</label>
        <Input 
           id= "title"
           name="title"
           className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important"
           required
           placeholder="startup Title"
           />

           {errors.title && <p className="text-red-500 mt-2 ml-5">{errors.title}</p> }
        
    </div>
    <div>
        <label htmlFor="description" className="font-bold text-[18px] text-black uppercase">description</label>
        <Textarea
           id= "description"
           name="description"
           className=" border-[3px] border-black p-5 text-[18px] text-black font-semibold rounded-[20px] mt-3 placeholder:text-black-300 !important"
           required
           placeholder="startup description"
           />

           {errors.description && <p className="text-red-500 mt-2 ml-5">{errors.description}</p> }
        
    </div>
    <div>
        <label htmlFor="category" className="font-bold text-[18px] text-black uppercase">category</label>
        <Input 
           id= "category"
           name="category"
           className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important"
           required
           placeholder="category"
           />

           {errors.category && <p className="text-red-500 mt-2 ml-5">{errors.category}</p> }
        
    </div>
    <div>
        <label htmlFor="link" className="font-bold text-[18px] text-black uppercase">image link</label>
        <Input 
           id= "link"
           name="link"
           className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important"
           required
           placeholder="startup image url"
           />

           {errors.link && <p className="text-red-500 mt-2 ml-5">{errors.link}</p> }
        
    </div>
    <div data-color-mode="light">
        <label htmlFor="pitch" className="font-bold text-[18px] text-black uppercase"> pitch</label>
        <MDEditor
        value={pitch}
        onChange={(value)=>setpitch(value as string)}
        id="pitch"
        preview="edit"
        height={300}
        style={{borderRadius:20,overflow:"hidden"}}
        textareaProps={{
            placeholder:"explain about startup...."
        }}
        previewOptions={
            {
                disallowedElements:["style"],
            }
        }/>
        

           {errors.pitch && <p className="text-red-500 mt-2 ml-5">{errors.pitch}</p> }
        
    </div>
    <Button type="submit" className="bg-[#EE2B69] border-[4px] border-black rounded-full p-5 min-h-[70px] w-full font-bold text-[18px] !important"
    disabled={ispending}>
        {ispending ? 'fill the form completely...':'submit'}
        <Send className="size-6 ml-2"/>
    </Button>
  </form>

}

export default StartupForm
