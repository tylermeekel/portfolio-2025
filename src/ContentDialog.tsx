import { forwardRef } from "react";

type Props = {
  videoURL: string | null;
  textContent: string | null;
  toggleDialog: () => void;
};

const ContentDialog = forwardRef<HTMLDialogElement, Props>(
  ({ videoURL, textContent, toggleDialog }, ref) => {
    return (
      <dialog
        ref={ref}
        className="w-full h-full bg-linear-to-tr from-green-300 to-teal-600 m-auto"
      >
        <div className="h-3/12 flex items-center justify-center">
          {videoURL !== null ? (
            <video
              autoPlay
              controls
              src={videoURL}
              className="h-11/12 pt-5 aspect-video"
            />
          ) : (
            <p className="text-green-300">No Video Available :(</p>
          )}
        </div>
        <div className="h-7/12">
          {textContent != null && (
            <p className="h-full p-3 text-teal-950 overflow-y-scroll">
              {textContent}
            </p>
          )}
        </div>
        <div className="h-2/12 flex items-center justify-center">
          <button
            onClick={toggleDialog}
            className=" text-green-300 bg-teal-800 p-4 rounded-md w-2/3"
          >
            Back
          </button>
        </div>
      </dialog>
    );
  }
);

export default ContentDialog;
