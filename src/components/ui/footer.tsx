import { Link } from "react-router-dom";
import { Grass } from "./nature";
import { Wordmark } from "./wordmark";

export function Footer() {
  return (
    <footer className="mt-auto">
      <Grass color="#22392A" />
      <div className="bg-forest text-paper/80">
        <div className="container mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm md:grid-cols-3">
          <div className="flex items-start gap-3">
            <img src="/ailurus-mascot.svg" alt="" className="h-12" />
            <div>
              <p className="font-display text-lg font-semibold text-paper">
                <Wordmark accentClassName="text-[#FFB68A]" />
              </p>
              <p className="mt-1">Trinity University, San Antonio, Texas</p>
            </div>
          </div>

          <nav className="grid content-start gap-1.5" aria-label="Footer">
            <Link to="/research" className="hover:text-paper">Research</Link>
            <Link to="/people" className="hover:text-paper">People</Link>
            <Link to="/people#join" className="hover:text-paper">Join the lab</Link>
          </nav>

          <p className="md:text-right">© {new Date().getFullYear()} Ailurus Lab</p>
        </div>
      </div>
    </footer>
  );
}
