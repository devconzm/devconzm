import React from 'react'

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
            <h1 className='text-center'>About</h1>
            <div className="col-sm-12 ">
              {/* TODO */}
              <p>
              DevConZM is an annual platform elected by Agora Code Community and collective members of 
              the technology community in Zambia. It is specifically crafted with Software Developers
               and Tech Enthusiasts in mind. Its aim is first of all, to raise the quality of the craft, 
               secondly, to raise awareness of the industry which is still in its infancy in Zambia.
                We believe that providing a platform for developers to level up is key to a progressive approach 
                to building products and communities.
               </p>
               <p>
               DevConZM brings exposure that will prove useful to innovation in various industrial sectors leading to direct economic value addition. 
               Apart from the technical opportunities available, Devcon will also give developers access to networking and investment opportunities which
                is critical to growth.
               </p>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}
export default About;
