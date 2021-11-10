import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import Seo from "../components/seo"

const IndexPage = () => (
  <section className="w-full h-full ">
    <Seo title="Frontend Mentor | Order summary card"/>
    <article className="flex-col my-24 border-2 border-black rounded-xl mx-auto text-center h-full w-96">
      
      <StaticImage className="h-36 rounded-t-xl" src="../images/insung-yoon-N1QwvJDvj4E-unsplash.jpg" alt=""/>

      <div className="p-4">
        
        <h3 className="pt-4 text-pink-400">
          Order Summary
        </h3>

        
        <p className="text-gray-500">
        You can now listen to millions of songs, audiobooks, and podcasts on any 
        device anywhere you like!
        </p>
        
        <div className="border-2 border-gray-200 px-2 py-2 rounded-xl inline-flex bg-gray-100 h-14 w-72">
          <div className="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#DFE6FB"/><path fill="#717FA6" fill-rule="nonzero" d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"/></g></svg>
          </div>
          
          <div className="flex-1">
            <div className="text-pink-500 align-top">Annual Plan</div>
            <p class="text-gray-500 align-baseline">$59.99/year</p>
          </div>
          
          <div className="flex-1 underline text-gray-500">Change</div>
        </div>
        
        <div className="border-2 text-center uppercase border-black text-white rounded-xl mt-4 mb-4 mx-6 px-2 pt-4 bg-pink-400 w-72">
          <h4>Proceed to Payment</h4>
        </div>

        <div className="text-gray-500">
          Cancel Order
        </div>
      </div> 

       
    </article>

    <div class="text-center">
      Challenge by <a class="text-blue" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a class="text-blue" href="#">Kamogelo Moalusi</a>.
    </div>   
  </section>
)

export default IndexPage
