// import CloseSVG from './SVGs/CloseSVG';
// import handleVisibility from '../utils/handleVisibility';

// function SideMenu({
//   setAddItemVisible,
//   setMenuVisible,
//   projectArr,
//   setFilterRange,
// }: {
//   setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>;
//   setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
//   projectArr: string[];
//   setFilterRange: React.Dispatch<React.SetStateAction<string[]>>;
// }) {
//   let projKey = 0;

//   return (
//     <div
//       className="bg-[rgba(0, 0, 0, 100)] absolute h-screen w-screen sm:static sm:block sm:h-full sm:w-fit"
//       onClick={() => {
//         handleVisibility.hide(setMenuVisible);
//       }}
//     >
//       <div className=" absolute right-0 top-0 flex h-[90dvh] w-32 flex-col justify-between border border-black bg-white sm:static sm:h-full sm:w-[250px]  sm:border-t-0">
//         <ul className="ml-2 mt-2">
//           <li
//             className="mt-2 text-lg sm:text-2xl"
//             onClick={() => setFilterRange(['all', 'none'])}
//           >
//             All
//           </li>
//           <li
//             className="mt-2 text-lg sm:text-2xl"
//             onClick={() => setFilterRange(['today', 'none'])}
//           >
//             Today
//           </li>
//           <li
//             className="mt-2 text-lg sm:text-2xl"
//             onClick={() => setFilterRange(['tomorrow', 'none'])}
//           >
//             Tomorrow
//           </li>
//           <li
//             className="mt-2 text-lg sm:text-2xl"
//             onClick={() => setFilterRange(['week', 'none'])}
//           >
//             Next 7 Days
//           </li>
//           <li>
//             <h3 className="mt-2 text-lg sm:text-2xl">Projects</h3>
//             <ul className="ml-2 sm:text-xl">
//               {projectArr.map(project => {
//                 projKey++;
//                 let projectName = project;
//                 if (projectName.length >= 13 && window.innerHeight < 640) {
//                   projectName = projectName.slice(0, 10) + '...';
//                 }
//                 return (
//                   <li
//                     onClick={() => setFilterRange(['project', project])}
//                     key={projKey}
//                   >
//                     {projectName}
//                   </li>
//                 );
//               })}
//             </ul>
//           </li>
//         </ul>
//         <button
//           onClick={() => {
//             handleVisibility.open(setAddItemVisible);
//             handleVisibility.hide(setMenuVisible);
//           }}
//           aria-label="new-item"
//           className="mb-2 grid h-16 w-16 rotate-45 place-items-center self-center rounded-full border-2 border-black bg-blue-400"
//         >
//           <CloseSVG classes="" width={48} color="#000" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SideMenu;
