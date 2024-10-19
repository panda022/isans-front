export default function About() {
  return (
    <div className='min-h-[60vh] flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-5xl font-semibold text-center my-7 text-green-600'>
            About ISANS
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6 text-left'>
            <p>
            ISANS is a non-profit organization that provides settlement and 
            integration services to immigrants who are in or are destined 
            for communities across Nova Scotia. By offering comprehensive programs and supports, as well as a dedicated and caring team, we help immigrants build a promising future here.
            </p>

            <p>
            As the front door to many of Nova Scotia’s immigrants, our goal is to create a community where all can belong and grow, in turn building a stronger Nova Scotia and Canada for all.
            </p>

            
          </div>
        </div>
      </div>
    </div>
  );
}