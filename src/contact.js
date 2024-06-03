import React from "react";
const Contact = () => {
    return (  

        <div className="contact">
            <h2>Feel Free To contact Us</h2>
            <form>
            <label>UserName</label>
            <input type="text-number" 
            required
            />
            <label>Email</label>
            <input type="email" 
            required
            />
            <label>Enter You Message</label>
            <textarea

            required
            ></textarea>
            <button>Send</button>
            </form>
        </div>
    );
}
 
export default Contact;
