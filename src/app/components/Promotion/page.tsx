import React from 'react'

const Promotion = () => {
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -mx-4 -mb-10 text-center">
        <div className="sm:w-1/2 mb-10 px-4">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/p3.png"
            />
          </div>
          <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
            Buy YouTube Videos
          </h2>
          <p className="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
          
        </div>
        <div className="sm:w-1/2 mb-10 px-4">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src='/p2.png'
            />
          </div>
          <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
            The Catalyzer
          </h2>
          <p className="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
          
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Promotion