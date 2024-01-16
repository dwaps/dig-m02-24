
function Contact() {
    return ( 
      <>
        <h1>PAGE CONTACT</h1>
        <form className="create-book">
          <div>
            <label htmlFor="name">Name:</label>
            <input id="name" name="name" type="text" />
          </div>
          
          <div>
            <label htmlFor="surname">Surname:</label>
            <input id="surname" name="surname" type="text" />
          </div>
          
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="text" />
          </div>
          
          <div>
            <label htmlFor="mailbody">Content:</label>
            <input id="mailbody" name="mailbody" type="text" />
          </div>
          
          <button type="submit">Envoyer</button>
        </form>
      </>
    )};
  
export default Contact;
  