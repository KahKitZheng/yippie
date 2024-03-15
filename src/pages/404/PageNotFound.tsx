import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="font-['Kalam'] text-7xl font-bold">404</h1>
      <div className="mt-4 text-center text-base text-slate-700">
        <p>De pagina die je zoekt bestaat niet.</p>
        <p>
          Klik{" "}
          <Link to="/" className="font-semibold text-indigo-500">
            hier
          </Link>{" "}
          om terug te gaan naar de homepagina.
        </p>
      </div>
    </div>
  );
}
