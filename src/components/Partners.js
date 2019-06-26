import React from 'react'

function Partners() {
  return (
    <section id="partners">
      <div className="container">
        <h1 className='text-center'>Partners</h1>
        <div className="">
          {/* TODO */}
          < div class = "container" >
              <div class = "row" >
                <div class = "col-sm" >
                    <a href = "https://www.jetbrains.com" target="_blank">
                        <img
                            width = "200"
                            height = "200"
                            alt = "JetBrains"
                            src = {
                                require('../assets/jetbrains.png')
                            }
                        />
                    </a>
                </div> 

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Partners;