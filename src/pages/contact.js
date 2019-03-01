import React from 'react'
import Layout from '../components/layout'
const Contact=()=>(
<Layout>
    <div id='contact' style={{textAlign: `center`}}>
     <h1>Contact Me </h1>
    <form
      action="https://formspree.io/cmlugoce@gmail.com"
      method="POST"
      className="row"
    >
      <div className="col-lg-8" style={{ margin: '0 auto' }}>
        <div className="row">
          <div className="form-group  col-md-6">
            <label htmlFor="_replyto">Email</label>
            <input
              type="email"
              name="_replyto"
              className="form-control"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">Name</label>
            <input name="name" className="form-control" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="10"
            required
          />
        </div>
        <div className="text-right">
          <input
            type="submit"
            value="SEND MESSAGE"
            className="btn btn-primary btn-submit"
          />
        </div>
      </div>
    </form>
    </div>
  </Layout>
)

export default Contact;