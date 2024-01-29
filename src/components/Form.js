import "./FormStyles.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form name="submit-to-google-sheet">
            <label>Your Name</label>
            <input type="text" name="Name"required></input>
            <label>Email</label>
            <input type="email" name="Email" required></input>
            <label>Subject</label>
            <input type="text" name="Subject"></input>
            <label>Your message</label>
            <textarea rows="5" name="Message" placeholder="Write your message here......" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

//   const scriptURL = 'https://script.google.com/macros/s/AKfycbwzSM8tmbefoal_tWnjglUput06ikiBJnoEQbpRbhrDUzXOzMf86FSMUuHPO313u2H7/exec'
//   const form = document.forms['submit-to-google-sheet']

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => console.log('Success!', response))
//       .catch(error => console.error('Error!', error.message))
//   })

export default Form