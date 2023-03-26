import React, {useState} from "react";
import {CommonModalOption} from "@/model/commonModalOption";

const CommonModal = (props: CommonModalOption) => {

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0) {
            return;
        }

        setInputValue(e.target.value);
    };


    const [inputValue, setInputValue] = useState(""); // state to store the input value

    const handleYesButtonClicked = () => {
        if (props.yesButtonClickedCallback) {
            props.yesButtonClickedCallback(inputValue);
        }
    }

  return (
      <div className="relative z-30" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          {/*Background backdrop, show/hide based on modal state.*/}

          {/*Entering: "ease-out duration-300"*/}
          {/*  From: "opacity-0"*/}
          {/*  To: "opacity-100"*/}
          {/*Leaving: "ease-in duration-200"*/}
          {/*  From: "opacity-100"*/}
          {/*  To: "opacity-0"*/}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-30 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              {/*Modal panel, show/hide based on modal state.*/}

              {/*Entering: "ease-out duration-300"*/}
              {/*  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"*/}
              {/*  To: "opacity-100 translate-y-0 sm:scale-100"*/}
              {/*Leaving: "ease-in duration-200"*/}
              {/*  From: "opacity-100 translate-y-0 sm:scale-100"*/}
              {/*  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"*/}
            <div
                className="absolute top-40 w-auto max-w-80 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">{props.title}</h3>
                  </div>
                </div>
              </div>
                <input
                    className="px-8 my-8 bg-grey text-clay px-4 py-3 w-full rounded-lg placeholder:text-clay focus:outline-none focus:border-0 focus:ring-1 focus:ring-lightpurple"
                    type="text"
                    value={inputValue}
                    onChange={handleInputValue}
                    placeholder={props.textInputPromptTitle}
                />
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button"
                        style={{
                          visibility: !!props.yesButtonName? "visible" : "hidden",
                        }}
                        onClick={() => handleYesButtonClicked()}
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">{props.yesButtonName}
                </button>
                <button type="button"
                        style={{
                          visibility: !!props.noButtonName ? "visible" : "hidden",
                        }}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">{props.noButtonName}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default CommonModal;
