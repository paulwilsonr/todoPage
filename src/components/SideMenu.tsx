import CloseSVG from './SVGs/CloseSVG';
import handleVisibility from '../utils/handleVisibility';

function SideMenu({
  setAddItemVisible,
  setMenuVisible,
  projectArr,
  setFilterRange,
}: {
  setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  projectArr: string[];
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  let projKey = 0;

  return (
    <div
      className="w-screen h-screen bg-[rgba(0, 0, 0, 100)] absolute"
      onClick={() => {
        handleVisibility.hide(setMenuVisible);
      }}
    >
      <div className="absolute border border-black h-[90dvh] w-32 right-0 top-0 bg-white flex flex-col justify-between">
        <ul className="ml-1">
          <li onClick={() => setFilterRange(['all', 'none'])}>All</li>
          <li onClick={() => setFilterRange(['today', 'none'])}>Today</li>
          <li onClick={() => setFilterRange(['tomorrow', 'none'])}>Tomorrow</li>
          <li onClick={() => setFilterRange(['week', 'none'])}>Next 7 Days</li>
          <li>
            Projects
            <ul>
              {projectArr.map(project => {
                projKey++;
                return (
                  <li
                    onClick={() => setFilterRange(['project', project])}
                    key={projKey}
                  >
                    {project}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <button
          onClick={() => {
            handleVisibility.open(setAddItemVisible);
            handleVisibility.hide(setMenuVisible);
          }}
          aria-label="new-item"
          className="border-2 border-black rounded-full w-16 h-16 grid self-center place-items-center rotate-45"
        >
          <CloseSVG classes="" width={48} color="#000" />
        </button>
      </div>
    </div>
  );
}

export default SideMenu;
