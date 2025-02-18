import { ContactLinks } from "@/components/contact-links";

const Footer = ({ hideContent = false, hideSignature = false } : {hideContent?: boolean, hideSignature?: boolean}) => {
  return (
    <>
      {!hideContent &&
          <div className="footer-content">
            <p className="font-semibold text-red-800">contact me</p>
            <ContactLinks />
          </div>}
      {!hideSignature && <p className="signature">made with 🍜 by silvia</p>}
    </>
  );
};

export default Footer;
