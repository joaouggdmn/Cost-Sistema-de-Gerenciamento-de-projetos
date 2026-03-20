import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Container from "./Container";

function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-700/50 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 py-8 shadow-2xl">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-slate-200">
              Horizon Solutions &copy; {new Date().getFullYear()}
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Todos os direitos reservados
            </p>
          </div>

          {/* Social Links */}
          <ul className="flex items-center justify-center gap-4 sm:gap-6">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-800 transition-all duration-300
                           hover:bg-linear-to-br hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/50
                           active:scale-90 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl text-slate-400 transition-colors duration-300 group-hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/joaopedrouggioni"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-800 transition-all duration-300
                           hover:bg-linear-to-br hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50
                           active:scale-90 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl text-slate-400 transition-colors duration-300 group-hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/joaopedrouggioni"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-800 transition-all duration-300
                           hover:bg-linear-to-br hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50
                           active:scale-90 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-slate-400 transition-colors duration-300 group-hover:text-white" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
