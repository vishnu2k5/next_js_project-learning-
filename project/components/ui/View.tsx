import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import Ping from "./Ping"
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";


const View = async({id}:{id:string}) => {
      const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id }); 

    after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit(),
  );
  return (
    <div className="flex justify-end items-center mt-5 fixed bottom-3 right-3 ">
        <div className="absolute -top-0 -right-0">
            <Ping/>
        </div>
        

        <p className="font-medium font-16px bg-[#FFE8F0] px-4 py-2 rounded-lg capitalize text-black">
            <span>
                {totalViews} Views
            </span>
        </p>
        
      
    </div>
  )
}

export default View
