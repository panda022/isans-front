import { Link } from 'react-router-dom';



export default function Home() {
 

  
  return (
    <div>
      {/* Add a large image at the top */}
      <div>
        <img 
          src="/home-picture.PNG"  // Reference the image from the public folder
          alt="ISANS Banner"
          className="w-full h-80 object-cover" // Makes the image responsive
        />
      </div>

      <div className='flex flex-col gap-4 p-12 px-3 max-w-6xl mx-auto'>
       
     
        <Link
          to='/programs'
          className='text-3xs lg:text-4xl text-teal-500 font-bold hover:underline'
        >
          View all programs to start my journey
        </Link>
        <p className='text-gray-500 text-xs sm:text-sm'>
        Last year, ISANS worked with over 15,000 clients to build a future in Nova Scotia. At ISANS, we help you find your pathway to possibility.
        </p>
      </div>
      

    
    </div>
  
  );
}