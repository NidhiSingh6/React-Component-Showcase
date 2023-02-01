import React from 'react'

function Home() {
  return (
    <div class="w-full max-w-lg ml-96 mt-32">
  <form class="bg-black shadow-md rounded px-6 pt-6 pb-8 mb-4 ">
    <div class="mb-4 ">
      <h1 class="block text-white text-center text-4xl text-sm font-bold mb-2" for="welcome">
         Welcome !    
        </h1>
    </div>
    
    <div class="mb-6">
      <h2 class="block text-white  text-xl text-center text-sm font-bold mb-2" for="componentShowcase">
          ReactComponent Showcase
      </h2>
    </div>

    <div class="mb-6">
      <h4 class="block text-white  text-xs text-center text-sm font-bold mb-2" for="work">
      Stay up to date with the latest React projects, dashboards, libraries, templates and more!
      </h4>
    </div>
  
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
    </p>
    </div>
  )
}

export default Home;