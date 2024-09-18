export default function Front() {
    return (
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            {/* <h4 className="text-center text-xl font-bold">
            </h4> */}
            <h2 className="text-center text-purple-500 text-3xl font-bold">
              Hey, I am Sathish!
            </h2>
          </div>
          <p className="text-center text-1xl">
            A Frontend focused Web Developer building the Frontend of Websites and Web
            Applications that leads to the success of the overall product 
         
          </p>
        </div>
        <div className="flex-1">
          <img src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
               alt="Profile Img"
               className="w-80 h-80 bg-cover border border-purple p-2"/>
        </div>
      </section>
    );
  }
