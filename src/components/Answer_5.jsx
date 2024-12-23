export default function Answer6(){
    return(
        <>
        <div id="answer6" className="mx-auto max-w-xl pt-6 ">
            <div className="w-full text-center space-y-6">
              <h1 className=" text-center text-balance w-full text-3xl font-semibold tracking-tight text-gray-900 ">
              Explain, in a couple of paragraphs, what you think are two major challenges around DNS configuration for less-technical customers hosting websites
              </h1>
              
              <div className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 pb-6 ">
                <ul className="list-disc space-y-3">
                  <li className="text-start"><p>One major challenges with DNS configuration for less-technical users is understanding the different types of records, As it is not always clear on what each record does or why it's needed, which can often make the website setup feel so overwhelming.Example of it is when A record points to an IP address while CNAME points to points to another domain which can really cause confusion if not explained clearly.</p></li>
                  <li className="text-start"><p>Another major challenges with DNS configuration for less-technical users is when DNS change, many might expect that the changes will take effect instantly when the truth is a long delay in propogations happens which often takes time and even hours to complete. </p></li>
                </ul>
              </div>
            </div>
          </div>
        </>
    );
}