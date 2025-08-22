import faq from "../public/Data/faq";
import Accordion from "./Accordion";

export default function Faq() {

    return (
        <div className="section">
             <Accordion items={faq} />
        </div>
    )
}