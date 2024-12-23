export default function Answer3(){
    return(
        <>
        <div id="answer3" className="mx-auto max-w-xl pt-16">
            <div className="w-full text-center space-y-6">
              <h1 className=" text-center text-balance w-full text-3xl font-semibold tracking-tight text-gray-900 ">
                Rank your 5 favorite and 5 least favorite activities from this list: <a href="https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab" target="_blank" className="text-blue-500 text-lg">https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab</a>
              </h1>
              
              <div className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 pb-6 ">
                <p className="text-center py-6 text-2xl text-slate-700">My 5 Favorite Activities </p>
                <ul className="list-disc space-y-3">
                  
                  <li className="text-start">Respond to 20+ support requests via email every day</li>
                  <li className="text-start">Dig through server logs to troubleshoot a customer's website behavior</li>
                  <li className="text-start">Develop a code example to share with a customer</li>
                  <li className="text-start">Suggest and champion improvements to the Support team's workflow</li>
                  <li className="text-start">Work with the development team to help design a new feature based on feedback from customers</li>
                </ul>

                <p className="text-center py-6 text-2xl text-slate-700">My 5 Least Favorite Activities </p>
                <ul className="list-disc space-y-3">
                  
                  <li className="text-start">Debug a customer's build using a programming language and framework that you've never seen before</li>
                  <li className="text-start">Create video tutorials to help teach users a specific feature or use case</li>
                  <li className="text-start">Set up your own copy of several site frameworks for debugging</li>
                  <li className="text-start">Join a Zoom call with a VIP customer you have been helping via email, upon their request</li>
                  <li className="text-start">Respond to Netlify customers on Twitter</li>
                </ul>
              </div>
              

              
            </div>
          </div>
          
        </>
    );
}