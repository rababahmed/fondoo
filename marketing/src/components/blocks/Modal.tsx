import * as React from "react";
import { Dialog } from "@headlessui/react";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content?: any;
};

export const Modal = ({ isOpen, setIsOpen, content }: ModalProps) => {
  console.log(content);
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className={
        "fixed inset-0 z-10 flex items-center justify-center overflow-y-auto rounded-md"
      }
    >
      <div className="flex flex-col w-max bg-white pt-4 px-4 text-center rounded-md">
        <Dialog.Overlay />

        <div className="pb-4">
          <iframe
            width="840"
            height="472"
            src="https://www.youtube.com/embed/g021E_xfWcA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button
          className="my-4 justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 max-w-xs bg-white text-base font-inter font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setIsOpen(false)}
        >
          Go back
        </button>
      </div>
    </Dialog>
  );
};
