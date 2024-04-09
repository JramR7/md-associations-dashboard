import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

// Send sign-in link to user's email
const sendAuthEmailLink = async (email) => {
  const auth = getAuth();
  const actionCodeSettings = {
    url: "http://localhost:3000/dashboard",
    handleCodeInApp: true,
  };
  return sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", email);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default sendAuthEmailLink;
