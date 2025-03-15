"use client"

const SafeArea = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="flex flex-row justify-center">
            <div className="2xl:w-[1536px] 2x:px-0 w-screen">
                {children}
            </div>
        </div>
    );
};

export default SafeArea;