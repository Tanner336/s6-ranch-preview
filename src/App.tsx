import { RouterProvider } from "react-router-dom";
import { router } from "./routes/all-routes";
import { HelmetProvider } from "react-helmet-async";
import { Toaster, toast } from "sonner";
import { useEffect, useState } from "react";
import { dynamicData } from "./store";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

function useDinamicDataErrors() {
    useEffect(
        () => {
            if (dynamicData.error) {
                toast.error(`Error parsing data from the server. Please fix and try again later. Error: ${dynamicData.error} in file: ${dynamicData.filename}`);
                dynamicData.error = undefined;
            }
        }, []
    );
    return null;
}

export function App() {
    const [hasConsentValue, setHasConsentValue] = useState(false);

    useEffect(() => {
        setHasConsentValue(!!getCookieConsentValue());
        if (getCookieConsentValue() === 'true') {
            console.log('===================User ha s consented to cookies');
        }
    }, []);

    useDinamicDataErrors();
    return (<>
        <HelmetProvider context={{}}>
            <div className="min-h-screen grid place-items-center">
                <RouterProvider router={router} />
                <Toaster
                    toastOptions={{
                        style: {
                            right: '0px',
                            width: '500px',
                            color: 'white',
                            background: 'red',
                            fontSize: '1.2em',
                            fontWeight: 'bold',
                        }
                    }}
                />
            </div>

            {!hasConsentValue && (
                <CookieConsent
                    location="bottom"
                    buttonText="Accept"
                    cookieName="s6RanchCookieConsent"
                    style={{ background: "#2B373B" }}
                    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                    expires={150}
                >
                    This website uses cookies to enhance the user experience.{" "}
                    {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
                </CookieConsent>
            )
            }
        </HelmetProvider>
    </>);
}
