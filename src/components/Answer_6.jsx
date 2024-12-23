export default function Answer6(){
    return(
        <>
        <div id="answer6" className="mx-auto max-w-xl pt-16 ">
            <div className="w-full text-center space-y-6">
              <h1 className=" text-center text-balance w-full text-3xl font-semibold tracking-tight text-gray-900 ">
              A customer writes in to Support saying simply that their “site won’t build”. <br/> You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. <br/> You have no more information than this and the site’s source repository is private so you cannot test the build yourself. <br/> How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response.
              </h1>
              
              <div className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 pb-6 ">
                <p className="text-center py-6 text-2xl text-slate-700 font-bold">Troubleshooting Steps </p>
                <ol className=" list-decimal space-y-3">
                  <li className="text-start">
                    <p>
                      Look for specific errors or warnings related to the build process.
                    </p>
                  </li>
                  <li className="text-start">
                    <p>
                      Check the build command and publish directory and make sure it matches on the stuctor of the root file of the framework or static site generator.
                    </p>
                  </li>
                  <li className="text-start">
                    <p>
                      Check the build command and publish directory and make sure it matches on the stuctor of the root file of the framework or static site generator.
                    </p>
                  </li>
                  <li className="text-start">
                    <p>
                      Ask the customer about their framework, any recent changes made, or any additional tools or plugins used to make sure that any dependencies are all installed and is using correct scripts avioding build errors.
                    </p>
                  </li>
                </ol>
              </div>

              <p className="text-center py-6 text-2xl text-slate-700 font-bold">Customer Response </p>

              <p className="mt-8 text-pretty text-start text-lg font-medium text-gray-500 sm:text-xl/8">
              Hi Mr./Mrs. Customer,
              <br/><br/>

              Good day!
              <br/><br/>
              Thank you for reaching us. We understand how important it is to have your site up and running, and rest assured, we are here to help.
              <br/><br/>
              Upon reviewing your sites build logs, I noticed the following error:
              "Build failed due to a user error: Build script returned non-zero exit code: 2."
              <br/><br/>
              This error typically occurs when there is an issue with the build process, such as the configuration, dependencies, or code. 
              To help us investigate further, could you please provide answers to the following questions:
              <br/><br/>

              <ol className=" list-decimal space-y-3 pl-10">
                  <li className="text-start">
                    <p>
                      What framework or static site generator were you using?
                    </p>
                  </li>
                  <li className="text-start">
                    <p>
                      Have you made any recent changes to your code, dependencies, or configuration files?
                    </p>
                  </li>
                  <li className="text-start">
                    <p>
                      Were you able to run your project successfully in your local environment? If so, what build command were you using?
                    </p>
                  </li>
                  
                </ol>
             
                <br/><br/>

              Please let us know these details to assist you further and to resolve this issue right away. Thank you.
              <br/><br/>
              Best regards,
              <br/>
              Gromyko Andrevich A. Urgel Jr.
              </p>
            </div>
          </div>
          
        </>
    );
}