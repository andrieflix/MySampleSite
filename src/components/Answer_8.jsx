export default function Answer8(){
    return(
        <>
        <div id="answer8" className="mx-auto max-w-xl ">
            <div className="w-full text-center space-y-6">
              <h1 className=" text-center text-balance w-full text-3xl font-semibold tracking-tight text-gray-900 ">
                Talk about how you made your site and why you chose the tools you did.
              </h1>
              
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 pb-6">
              I built my site using React, Vite, and TailwindCSS because they are fast and easy to use. React helped me create reusable components, Vite provides quick setup and smooth development, and TailwindCSS made styling simple, modern and responsive. I choose these tools to allowed me to build a functional and visually appealing site efficiently and since i already have experience with it.
              </p>
              

              <h1 className=" text-center text-balance w-full text-3xl font-semibold tracking-tight text-gray-900 ">
                 Briefly explain one challenge you experienced in setting up this site and how you overcame it.
              </h1>

              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              One challenge I faced was ensuring smooth scrolling and active link highlighting for the navigation. It took some time doing trial and error to track the active section while rendering all components together. I am able to overcome these challenges by using the react useState function and ScrollIntoview method to seemlessly track the active section and scroll to it smoothly.
              </p>
            </div>
          </div>
        </>
    );
}