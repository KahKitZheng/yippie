import { useEffect, useState } from "react";
import NavMenu from "../NavMenu";

type LayoutProps = {
  children: React.ReactNode;
  includePadding?: boolean;
};

export default function Layout(props: LayoutProps) {
  const { children, includePadding } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <NavMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div
        className={`xs:w-full relative mx-auto ${includePadding ? "py-12" : ""} px-3 sm:px-8 lg:w-[700px] lg:px-0 `}
      >
        {children}
        {isMenuOpen && (
          <div
            className="absolute inset-0 z-10 w-full bg-black/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </div>
    </>
  );
}
