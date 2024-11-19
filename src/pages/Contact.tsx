import Lottie from "react-lottie-player";
import contacts from "../../contactUs.json"
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Card, CardContent,CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
    return (
        <>
           <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-14 p-10">
            <div>
            <Lottie
      loop
      animationData={contacts}
      play
       className="w-[300px] md:w-[400px] lg:w-[500px]"
    />
            </div>
            {/* form part */}
            <div>
            <Card className="lg:w-[500px] items-center shadow-2xl rounded-2xl">
      <CardHeader>
        <CardTitle className="relative text-center text-3xl font-bold  bg-gradient-to-r from-blue-500 to-cyan-500  text-transparent bg-clip-text mb-8 ">Please Contact Us  </CardTitle>
        <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 mt-8"></div>
       
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name <span className="text-red-500 font-bold">*</span></Label>
              <Input id="name" placeholder="Enter Your Name" />
            </div>
            
          </div>
          <div className="grid w-full items-center gap-4 my-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email <span className="text-red-500 font-bold">*</span></Label>
              <Input id="name" placeholder="Enter Your Name" />
            </div>
            
          </div>
          <div className="grid w-full items-center gap-4 my-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Contact No <span className="text-red-500 font-bold">*</span></Label>
              <Input id="name" placeholder="Enter Your Name" />
            </div>
            
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Subject <span className="text-red-500 font-bold">*</span></Label>
              <Input id="name" placeholder="Enter Your Name" />
            </div>
            
          </div>
          <div className="grid w-full items-center gap-4 my-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Tell us About you <span className="text-red-500 font-bold">*</span></Label>
              <Textarea placeholder="Type your message here." />
            </div>
            
          </div>
          <Button variant="outline">Send Request <span><FaArrowRight /></span></Button>
        </form>
      </CardContent>
      
    </Card>
            </div>
           </section>

           {/* address section about eJobsIT */}
           <section className="py-4  bg-gradient-to-r from-blue-50 to-cyan-50  sm:py-8 lg:py-16 rounded-sm shadow-2xl my-16">

           </section>
        </>
    );
};

export default Contact;