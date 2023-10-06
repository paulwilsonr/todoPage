function SideMenu () {
  return (
    <div className='absolute h-full w-32 right-0 top-16 bg-white'>
      <ul className='ml-1'>
        <li>All</li>
        <li>Today</li>
        <li>Tomorrow</li>
        <li>Next 7 Days</li>
        <li>Projects</li>
        <li>Notes</li>
      </ul>
    </div>
  )
}

export default SideMenu
