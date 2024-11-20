

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <>
    <div >

 
    
 <motion.div
        className=" mb-12 mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-4">
        <h1 className="text-2xl   lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 my-16">
          About eJobs IT
        </h1>
   
   
        
        <p className="lg:w-3/5 mt-4  text-gray-500   font-semibold">
        At eJobs IT, we empower businesses and individuals to thrive in the digital age. Our services include custom website development, social media setup, and high-quality content creation to help brands establish a strong online presence.

For aspiring professionals, we offer industry-leading training programs, including the renowned Zero to Hero Freelancer Course, Motion Boss (Advanced Motion Graphics), and Editing Master (Advanced Video Editing). With over 10,000 students trained, our courses provide hands-on expertise in motion graphics, video editing, web development, and more through flexible live or pre-recorded classes.

Led by Ahsanullah Shaon, a seasoned Video Editor and Motion Graphics Designer, eJobs IT is dedicated to innovation, excellence, and community growth. Join us and transform your digital potential into success!
        </p>
        </div>
     
    
    </motion.div>


    <h1 className="text-center lg:text-4xl font-serif mt-40 mb-20 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Why Choose Us</h1>
    
    <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16 mb-10 rounded-xl shadow-2xl">
     
      

      {/* Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {/* Card 1 */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-600">
              Comprehensive Digital Services
            </h2>
            <p className="mt-4 text-gray-700">
              We offer website development, social media setup, and content creation to establish a strong online presence.
            </p>
          </Card>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-600">
              Professional Training Programs
            </h2>
            <p className="mt-4 text-gray-700">
              Our Zero to Hero Freelancer Course and specialized programs equip students for thriving careers.
            </p>
          </Card>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-purple-600">
              Expert-Level Courses
            </h2>
            <p className="mt-4 text-gray-700">
              Advanced Motion Graphics and Video Editing Courses with over 10,000 students trained.
            </p>
          </Card>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-red-600">
              Flexible Learning Options
            </h2>
            <p className="mt-4 text-gray-700">
              Live and pre-recorded courses in graphics design, video editing, motion graphics, and more.
            </p>
          </Card>
        </motion.div>
      </div>

      {/* Founder Section */}
      <motion.div
        className="mt-16 text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-800">
          Meet Our Founder
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          eJobs IT is led by Ahsanullah Shaon, an experienced Video Editor & Motion Graphics Designer, committed to empowering the next generation of digital creators.
        </p>
        <div className="mt-8 flex justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Ahsanullah Shaon"
            className="rounded-full border-4 border-green-500 w-32 h-32 shadow-lg"
          />
        </div>
        <p className="mt-4 text-lg text-gray-700">
          Follow Shaon on <a href="#" className="text-blue-600 underline">YouTube</a> and <a href="#" className="text-blue-600 underline">Facebook</a>.
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold text-blue-600 p-4">
          Ready to Start Your Digital Journey?
        </h2>
        <p className="mt-4 text-gray-700 p-4">
          Whether you're a business or a student, eJobs IT is here to support your growth.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300">
          Contact Us Today
        </button>
      </motion.div>
    </section>
    </div>

    {/* department section */}
    <section className="my-16">
      <h1 className="text-2xl lg:text-4xl mt-32 font-black text-center">
        Our Training Departments
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 justify-center items-center my-14 p-4">
        {/* First Card */}
        <motion.div
          className="shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://i.ibb.co/ZSZZkMd/course-1662552115.jpg"
            alt="Motion Graphics"
            className="rounded-t-lg"
          />
          <h1 className="text-center my-10 font-mono text-xl lg:text-2xl">
            Motion Graphics
          </h1>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className="shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://i.ibb.co/mFPstB0/course-1674371266.jpg"
            alt="Frontend Development with React"
            className="rounded-t-lg"
          />
          <h1 className="text-center my-10 font-mono text-xl lg:text-2xl">
            Frontend Development with React
          </h1>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default AboutUs;
