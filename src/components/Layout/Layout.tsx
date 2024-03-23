import { useEffect, useState } from "react";
import NavMenu from "../NavMenu";
import BlobTopLeft from "../../assets/blob_1.svg?react";
import BlobTopRight from "../../assets/blob_2.svg?react";
import BlobBottomLeft from "../../assets/blob_3.svg?react";
import BlobBottomRight from "../../assets/blob_4.svg?react";

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
      <div className="absolute h-full w-full overflow-hidden">
        <BlobTopLeft className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 fill-sky-200 sm:block sm:-translate-x-1/3 sm:-translate-y-1/3" />
        <BlobTopRight className="absolute right-0 top-0 -translate-y-1/3 translate-x-1/2 fill-amber-200 sm:block sm:-translate-y-1/3 sm:translate-x-1/3" />
        <BlobBottomLeft className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 fill-emerald-200 sm:block sm:-translate-x-1/2 sm:translate-y-1/3" />
        <BlobBottomRight className="absolute bottom-0 right-0 translate-x-1/3 translate-y-3/4 fill-rose-200 sm:block sm:translate-x-1/2 sm:translate-y-1/3" />
      </div>

      <div
        className={`xs:w-full relative mx-auto ${includePadding ? "py-12" : ""} h-full px-3 sm:px-8 lg:w-[700px] lg:px-0`}
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
