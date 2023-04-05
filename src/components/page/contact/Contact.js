
import React from 'react'
import './contact.css';
import Navbar from '../../bars/Navbar';
import Footer from '../../bars/Footer';

export default function Contact() {
  return (
    <>
        <Navbar />
        <main>
        <section className="contact">
            <h2>Contact Us</h2>
            <div className="contact-card">
                <form action="#">
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" id="fname" name="fname" required />

                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" id="lname" name="lname" required />

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="marital-status">Marital Status:</label>
                    <select id="marital-status" name="marital-status" required>
                        <option value="">Select an option</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                    </select>

                    <label htmlFor="bird-belief">Do you believe in birds?</label>
                    <label htmlFor="yes">Yes</label>
                    <input type="radio" id="no" name="bird-belief" value="no" />
                    <label htmlFor="no">No</label>
                    <input type="radio" id="not-sure" name="bird-belief" value="not-sure" />
                    <label htmlFor="not-sure">Not sure</label>

                    <label htmlFor="hogwarts-house">Hogwarts House:</label>
                    <select id="hogwarts-house" name="hogwarts-house" required>
                        <option value="">Select your house</option>
                        <option value="gryffindor">Gryffindor</option>
                        <option value="hufflepuff">Hufflepuff</option>
                        <option value="ravenclaw">Ravenclaw</option>
                        <option value="slytherin">Slytherin</option>
                    </select>

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    </main>
    <Footer />
    
    </>
    

  )
}
