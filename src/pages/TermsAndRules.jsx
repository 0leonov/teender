import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const TermsAndRules = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state === "section2" ? "section2" : "section1";
    
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [location]);

  return (
    <div className="container mx-auto py-8 flex flex-col items-center overflow-y-auto">
      <div className="mb-4 text-left">
        <img src="/images/signup.png" alt="signup" className="inline-block" style={{ marginLeft: 0 }} width="75" />
      </div>
      <hr size="10" width="200%" color="black"/>
      <h1 className="text-2xl font-bold mb-4" id="section1" >Terms of use for "Teender"</h1>
      <ul className="list-disc list-inside text-left">
        <li>You must be 18 years of age or younger to use the site.</li>
        <li>You can not use fake photos or information about yourself.</li>
        <li>It is forbidden to post content that violates copyright or privacy rights.</li>
        <li>You can not use the site to distribute advertising or spam.</li>
        <li>The use of profanity or offensive language is prohibited.</li>
        <li>You cannot discriminate against other users based on their race, gender, orientation, etc.</li>
        <li>It is forbidden to use the site for the purpose of illegal communication or communication with the opposite sex.</li>
        <li>You must not use the site for illegal activities, such as the exchange of drugs or weapons.</li>
        <li>It is forbidden to deceive other users or try to get access to their personal data.</li>
        <li>Do not post photos or information about other people without their consent.</li>
        <li>I hope these rules help users use the site safely and effectively.</li>
      </ul>
      <div className="container mx-auto py-8  flex flex-col items-center line-height" >
        <h1 className="text-2xl font-bold mb-4" id="section2" >Policy of Privacy of "Teender"</h1>
        <p>
          <br></br><strong>The privacy and protection of the personal information</strong> of our audience is very important to us.  We respect and protect the privacy of all users who visit and use our site, as well as anyone who provides us with their personal information, including email address and phone number.<br></br>

          <br></br>The following are the rules we follow to protect your data:<br></br>

          <br></br><strong><u>Collection and use of personal information</u></strong><br></br><br></br> We collect personal information, such as email address and phone number, only if you voluntarily provide it to us when registering on the site or when placing an order.  We use this information only to contact you and provide the services you have requested and to process your orders and requests.<br></br>

          <br></br><strong><u>Disclosure of information</u></strong><br></br><br></br> We do not disclose your personal information to third parties without your express permission, except as necessary to fulfill an order or request that you have left on our website.<br></br>

          <br></br><strong><u>Information Security</u></strong><br></br><br></br> We take all reasonable steps to protect your personal information from unauthorized access, use or disclosure.  We use only reliable and secure methods of storing information, including encryption and protection against hacking.<br></br>

          <br></br><strong><u>Use of cookies</u></strong><br></br><br></br> We use cookies to improve the site and provide you with a more personalized experience.  We do not use cookies to collect personal information about you.<br></br>

          <br></br><strong><u>Privacy Policy Changes</u></strong><br></br><br></br> We reserve the right to change or update our privacy policy at any time without notice.  We recommend that you check this page regularly to stay updated.<br></br>

          <br></br>If you have any questions or comments about our privacy policy, please contact us via the contact form on our website.<br></br>

          <strong><u><br></br>If you register on our platform you automatically agree with all the terms!</u></strong>
        </p>
      </div>
    </div>
  );
}
export default TermsAndRules;

