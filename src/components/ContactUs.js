import React from 'react'

function ContactUs() {
    return (
        <section id="contact_us">
            <div className="container">
                <h1 className='text-center'>Contact Us</h1>
                <div className="row">
                    <form method="post" className="col-md-12">
                        <h3>Drop Us a Message</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="txtName" className="form-control" placeholder="Your Name *" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="btnSubmit" className="btnContact" defaultValue="Send Message" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea name="txtMsg" className="form-control" placeholder="Your Message *"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default ContactUs;