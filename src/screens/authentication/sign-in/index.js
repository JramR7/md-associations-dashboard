/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "screens/authentication/components/CoverLayout";

// Images
import loginImg from "assets/images/curved-images/login-01.webp";
import sendAuthEmailLink from "../utils/sendEmailLink";

function SignIn() {
  const [pressedLogin, setPressedLogin] = useState(false);
  const [email, setEmail] = useState("");

  const handleLoginPress = async () => {
    setPressedLogin(true);
    sendAuthEmailLink(email);
  };

  return (
    <CoverLayout
      title="Asociaciones médicas de Colombia"
      description={"Ingresa tu email para iniciar"}
      image={loginImg}
    >
      {pressedLogin ? (
        <SoftBox component="form" role="form">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography variant="body2" fontWeight="regular" color="text">
                {`Un email de ingreso con instrucciones ha sido enviado a ${email}. 
                Por favor revisa tu email en este dispositivo para iniciar sesión.`}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox mt={4} mb={1}>
            <SoftButton
              variant="gradient"
              color="info"
              fullWidth
              onClick={() => setPressedLogin(false)}
            >
              Regresar
            </SoftButton>
          </SoftBox>
        </SoftBox>
      ) : (
        <SoftBox component="form" role="form" ml={-3}>
          <SoftBox mb={2}>
            <SoftBox mb={1}>
              <SoftTypography component="label" variant="body2" fontWeight="bold">
                Email
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </SoftBox>
          <SoftBox mt={4} mb={1}>
            <SoftButton variant="gradient" color="info" fullWidth onClick={handleLoginPress}>
              Iniciar sesión
            </SoftButton>
          </SoftBox>
        </SoftBox>
      )}
    </CoverLayout>
  );
}

export default SignIn;
