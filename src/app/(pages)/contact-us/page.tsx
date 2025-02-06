"use client"
import { useState } from "react"

export default function ContactUs() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setSelectedFile(e.target.files[0])
      }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()
        if(formData.fullName === '' || formData.email === '' || formData.phone === '' || formData.subject === '' || formData.message === '' || !selectedFile){
            alert('Please fill all the fields')
            return
        }

        alert('No implementation yet')
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        })
        setSelectedFile(null)
    }


    return (
        <div className="px-[4%] lg:px-[7%] mb-[150px] min-h-[1000px] md:pb-[200px] pb-[100px]">

            <div className="flex items-center gap-2 mb-4 md:mb-6 text-md mt-[50px]">
            
<span className="text-primary hover:underline cursor-pointer">Skyline Estimator</span>
<span>&gt;</span>
<span className="text-muted-foreground">Contact Us</span>
</div>
<h3 className="text-md font-normal text-center text-accent mb-[10px]">Fill the Form</h3>
<h1 className="text-6xl font-semibold text-center text-dark-blue tracking-tighter">Get in Touch</h1>


    <form className="flex justify-center items-center mt-[50px]" onSubmit={handleSubmit}>

    
    <div className="w-[100%] bg-[#f4f4f4] p-[20px] grid grid-cols-1 md:grid-cols-2 gap-6 px-[30px] md:px-[100px] py-[40px]">
      
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-[#1a2b6b] font-medium">
            Full Name
          </label>
          <input
            id="fullName"
            value={formData.fullName}
            placeholder="Enter Name"
            className="w-full p-2.5  bg-white focus:outline-none py-[20px]"
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>


        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[#1a2b6b] font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            placeholder="Enter Email Address"
            className="w-full p-2.5  bg-white focus:outline-none py-[20px]"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}


          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-[#1a2b6b] font-medium">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            placeholder="Enter Number"
            className="w-full p-2.5  bg-white focus:outline-none py-[20px]"
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>



        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-[#1a2b6b] font-medium">
            Subject
          </label>
          <input
            id="subject"
            placeholder="Enter Subject"
            value={formData.subject}
            className="w-full p-2.5  bg-white focus:outline-none py-[20px]"
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>



        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="files" className="text-[#1a2b6b] font-medium">
            Upload Files
          </label>
          <div className="bg-white p-3 py-[20px]">
  <label
    htmlFor="files"
    className="cursor-pointer text-black py-1 px-4 border border-dark-blue text-sm font-normal  transition"
  >
    Choose File
  </label>
  <input
    id="files"
    type="file"
    
    onChange={handleFileChange}
    className="hidden"
  />
</div>

        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="message" className="text-[#1a2b6b] font-medium">
            Enter Message
          </label>
          <textarea
            id="message"
            placeholder="Enter Message"
            value={formData.message}
            className="w-full p-2.5  bg-white min-h-[150px] resize-none focus:outline-none py-[20px]"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}

          />
          <div className="flex justify-center items-center mt-[20px]">    
            <button type="submit" className="bg-dark-blue hover:bg-accent transition-all duration-300 text-white px-8 py-[20px]  cursor-pointer text-md font-bold flex justify-center items-center w-[200px]">   Get A Quote</button>
          </div>
        </div>



      
    </div>
    </form>
        </div>
    )
}


