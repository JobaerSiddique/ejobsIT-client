

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <>
 <motion.div
        className="text-center mb-12 mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
    <Card className="my-10 shadow-2xl p-5">
   
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 my-8">
          About eJobs IT
        </h1>
        <p className="mt-4 text-lg  p-4 mx-auto text-justify font-semibold">
        At eJobs IT, we are passionate about empowering businesses and individuals to thrive in the
 digital world. We offer comprehensive digital services, including website development, social
 media setup, and content creation to help businesses establish a strong and engaging online
 presence. Our team works closely with you to design customized websites and social media
 profiles that reflect your brand and effectively connect with your target audience. We also create
 high-quality promotional videos, graphics designs, and content writing services that help
 businesses effectively communicate their message and engage with customers.
 In addition to our business services, we offer a range of professional training programs to
 prepare individuals for successful careers in digital content creation and freelancing. Our
 signature Our Zero to Hero Freelancer Course is a one-year, two-semester program that takes
 students from foundational skills in essential software to advanced content creation techniques.
 Through this program, we ensure students gain hands-on experience and practical skills that
 prepare them for freelancing opportunities.
 eJobs IT is also proud to offer two signature courses that have made a big impact in
 Bangladesh’s digital training space: the Advanced Motion Graphics Course (Motion Boss)
 and the Advanced Video Editing Course (Editing Master). With over 10,000 students
 enrolled, these courses are designed to deliver expert-level training in motion graphics and
 video editing, helping our students become leaders in their fields.
 To accommodate various learning styles, we offer flexible online live classes as well as
 pre-recorded courses in graphics design, video editing, motion graphics, web
 development, and 3D animation. Whether students prefer the interactivity of live sessions or
 the freedom of self-paced study, we’re committed to delivering high-quality education that fits
 their needs.
 eJobs IT is led by Ahsanullah Shaon, a skilled Video Editor & Motion Graphics Designer
 currently working with Darul Arqam Educational Trust, UK. Shaon also contributes his
 expertise as an Instructor Resource Person for the Post Graduate Diploma (PGD) program
 at National University, Bangladesh. With a clear vision to uplift and guide others in digital
 content creation, Shaon ensures that eJobs IT remains dedicated to excellence, innovation, and
 community support. Connect with him on YouTube and Facebook.
 At eJobs IT, we believe in the transformative power of digital skills, and we’re here to support
 every step of your journey, whether you're a business looking to enhance your online presence
 or a student aiming to build a thriving career.
        </p>
     
    </Card>
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
    </>
  );
};

export default AboutUs;
