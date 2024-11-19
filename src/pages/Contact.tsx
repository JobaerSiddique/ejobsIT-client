import Lottie from "react-lottie-player";
import contacts from "../../contactUs.json"
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Card, CardContent,CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
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
           <h1 className="text-xl lg:text-6xl text-center font-bold mt-16">Find Us Here</h1>
           <section className="py-4 bg-gradient-to-r from-blue-50 to-cyan-50 sm:py-8 lg:py-16 rounded-sm shadow-2xl my-16">
          
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-16 p-16">
        {/* Card 1 */}
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-[350px] p-16 flex justify-center items-center shadow-2xl">
            <i className="text-4xl text-green-600 border border-lime-500 p-2 rounded-md">
              <HiOutlineOfficeBuilding />
            </i>
            <p className="ml-5">
              Dhaka,{" "}
              <span className="bg-gradient-to-r from-green-700 to-red-500 text-transparent bg-clip-text font-bold">
                Bangladesh
              </span>
            </p>
          </Card>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="w-[350px] p-16 flex justify-center items-center shadow-2xl">
            <i className="text-4xl text-green-600 border border-lime-500 p-2 rounded-md">
              <FaPhone />
            </i>
            <p className="ml-5">01730481212</p>
          </Card>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="w-[350px] p-16 flex justify-center items-center shadow-2xl">
            <i className="text-4xl text-green-600 border border-lime-500 p-2 rounded-md">
              <BsPersonWorkspace />
            </i>
            <p className="ml-5 text-center">24 Hours Support <span>Our Teams</span></p>
          </Card>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="w-[350px] p-16 flex justify-center items-center shadow-2xl">
            <i className="text-4xl text-green-600 border border-lime-500 p-2 rounded-md">
              <MdEmail />
            </i>
            <p className="ml-5">ejobsIt@example.com</p>
          </Card>
        </motion.div>
      </div>
    </section>

        </>
    );
};

export default Contact;