export default function Answer2(){
    return(
        <>
        <div id="answer2" className="mx-auto max-w-xl pt-16">
            <div className="w-full text-center space-y-6">
              <h1 className=" text-center text-balance w-full text-3xl font-semibold tracking-tight text-gray-900 ">
                What did you think of our service during the time you used it?
              </h1>
              
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 pb-6">
              The service was very user-friendly, and I appreciated how simple it is to connect my GitHub repository to NEtlify and get the site deployed quickly. Most of the Netlify features are straightforward and easy to understand.
              </p>
              

              <h1 className=" text-center text-balance w-full text-3xl font-semibold tracking-tight text-gray-900 ">
              Provide some constructive criticism or some features that impressed you.
              </h1>

              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              One thing that really impress me is the fact that it is very easy to use. However, error messages during build process is quite challenging maybe having it more detailed so that fixing issues could have been easier. Thank you.
              </p>
            </div>
          </div>
        </>
    );
}