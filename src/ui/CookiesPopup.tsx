import { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

export function CookiesPopup() {
    const [hasConsentValue, setHasConsentValue] = useState(false);

    useEffect(() => {
        setHasConsentValue(!!getCookieConsentValue());
        if (getCookieConsentValue() === 'true') {
            console.log('User has consented to cookies');
        }
    }, []);

    return (<>
        {!hasConsentValue && (
            <div style={{ background: "#2B373B", position: "fixed", bottom: 0, left: 0, width: '100%', zIndex: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                <CookieConsent
                    location="bottom"
                    buttonText="Accept"
                    cookieName="s6RanchCookieConsent"
                    style={{ background: "transparent", position: "relative", maxWidth: '500px' }}
                    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                    expires={150}
                >
                    <div>This website uses cookies to enhance the user experience.{" "}</div>
                    {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
                </CookieConsent>

            </div>
        )}
    </>);
}
