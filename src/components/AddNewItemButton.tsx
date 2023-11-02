import CloseSVG from './SVGs/CloseSVG';
import handleVisibility from '../utils/handleVisibility';

function AddNewItemButton({
  setAddItemVisible,
}: {
  setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => {
        handleVisibility.open(setAddItemVisible);
      }}
      aria-label="new-item"
      className="fixed inset-x-0 bottom-4 z-10 mx-auto  mb-2 grid h-20 w-20 rotate-45 place-items-center rounded-full border-2 border-black bg-blue-300 hover:bg-blue-400 active:bg-blue-500"
    >
      <CloseSVG classes="" width={48} color="#000" />
    </button>
  );
}

export default AddNewItemButton;
