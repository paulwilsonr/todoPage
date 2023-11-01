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
      className="fixed bottom-4 right-4 mb-2 grid h-20 w-20 rotate-45 place-items-center self-center rounded-full border-2 border-black bg-blue-400"
    >
      <CloseSVG classes="" width={48} color="#000" />
    </button>
  );
}

export default AddNewItemButton;
