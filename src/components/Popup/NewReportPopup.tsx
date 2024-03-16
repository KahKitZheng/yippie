import { FaPlus } from "react-icons/fa6";
import Button from "../Button/Button";
import Popup from "./Popup";
import { useLocation, useNavigate } from "react-router-dom";

type NewReportPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function NewReportPopup(props: NewReportPopupProps) {
  const { isOpen, onClose } = props;

  const navigate = useNavigate();

  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Kies een template">
      <div className="mt-4 space-y-4">
        <form className="space-y-6">
          <div>
            <div className="mb-2 flex justify-between gap-4 border-b border-b-slate-200 pb-1">
              <p className="font-bold">Team templates</p>
              <button className="mr-[3px]">
                <FaPlus />
              </button>
            </div>
            <ul>
              <li>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="1"
                    value="1"
                    name="template-scope"
                    className="accent-indigo-400 checked:bg-indigo-400"
                  />
                  <label htmlFor="1">Bila - John Doe</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="2"
                    value="2"
                    name="template-scope"
                    className="accent-indigo-400 checked:bg-indigo-400"
                  />
                  <label htmlFor="2">Bila - John Doe</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="3"
                    value="3"
                    name="template-scope"
                    className="accent-indigo-400 checked:bg-indigo-400"
                  />
                  <label htmlFor="3">Bila - John Doe</label>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-2 flex justify-between gap-4 border-b border-b-slate-200 pb-1">
              <p className="font-bold">Bedrijf templates</p>
              <button className="mr-[3px]">
                <FaPlus />
              </button>
            </div>
            <ul>
              <li>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="4"
                    value="4"
                    name="template-scope"
                    className="accent-indigo-400 checked:bg-indigo-400"
                  />
                  <label htmlFor="4">Bila - John Doe</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="5"
                    value="5"
                    name="template-scope"
                    className="accent-indigo-400 checked:bg-indigo-400"
                  />
                  <label htmlFor="5">Bila - John Doe</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="6"
                    value="6"
                    name="template-scope"
                    className="accent-indigo-400 checked:bg-indigo-400"
                  />
                  <label htmlFor="6">Bila - John Doe</label>
                </div>
              </li>
            </ul>
          </div>
        </form>
        <Button callback={() => navigate("/reports/1")}>
          verslag aanmaken
        </Button>
      </div>
    </Popup>
  );
}
