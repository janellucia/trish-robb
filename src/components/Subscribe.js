import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <div className="signup-form">
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div className="error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        ref={node => (email = node)}
        type="email"
        placeholder="email@youremail.com"
      />
      <button onClick={submit}>
        Subscribe
      </button>
    </div>
  );
};

const url =
  "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e";


function Subscribe() {
  return (
    <section id="subscribe">
      <h2>Mailing List</h2>
      <p>Join Trish Robb's mailing list to stay up-to-date on upcoming music and shows!</p>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </section>
  );
}


export default Subscribe;