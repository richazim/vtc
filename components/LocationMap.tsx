"use client";

const LocationMap = () => {
 return (
     <div className="w-full h-[100px] border">
         <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}
                 src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=49000%20Angers+(VTC)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
         </iframe>
     </div>
 );
};

export default LocationMap;