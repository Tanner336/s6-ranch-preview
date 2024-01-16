import { Link } from "react-router-dom";
import tornjakZadok from "@/assets/img/tornjak-zadok.jpg";
import { ContactForm } from "../../components/contact-form";

export function Home() {
    return (<>
        <div className="w-full h-full">

            <nav className="p-4 flex items-center justify-between">
                <div>Logo</div>
                <div>
                    <Link  style={{color: 'black'}} to={"/staff"}>
                        <span className="inline-block px-3 p-2 border-slate-600 border rounded active:scale-[.97]">Staff</span>
                    </Link>
                    <Link  style={{color: 'black'}} to={"/AboutBreed"}>
                        <span className="inline-block px-3 p-2 border-slate-600 border rounded active:scale-[.97]">About Breed</span>
                    </Link>
                </div>
            </nav>

            <ContactForm />

            <img src={tornjakZadok} alt="" />
        </div>
    </>);
}