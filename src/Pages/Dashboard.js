import { faAdd, faAngleDown, faAngleLeft, faAnglesLeft, faBell, faBoxArchive, faCalendar, faCalendarDay, faChevronLeft, faComment, faFile, faFilter, faGear, faHome, faLink, faListCheck, faMagnifyingGlass, faMessage, faPen, faPlus, faTableCells, faUser, faUsers, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import data from "../utils/list.json"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Dashboard = () => {
    const [todo, setTodo] = useState([data?.todo]);
    const [onProgress, setOnProgess] = useState([data.onProgress]);
    const [done, setDone] = useState([data.done]);

    return (
        <>
            <div>
                <div className="flex h-screen overflow-y-hidden bg-white" >


                    {/* <!-- Sidebar backdrop --> */}
                   

                    {/* <!-- Sidebar --> */}
                    <aside
                        className="fixed inset-y-0 z-10 flex px-6 flex-col flex-shrink-0 w-72 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none -translate-x-full lg:translate-x-0 lg:w-20'"
                    >
                        {/* <!-- sidebar header --> */}
                        <div className="flex items-center justify-between border-b  flex-shrink-0 px-2 py-8" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path opacity=".6" d="M14 16c0 1.77-.77 3.37-2 4.46A5.93 5.93 0 0 1 8 22c-3.31 0-6-2.69-6-6 0-2.76 1.88-5.1 4.42-5.79a6.019 6.019 0 0 0 4 3.58c.5.14 1.03.21 1.58.21s1.08-.07 1.58-.21c.27.68.42 1.43.42 2.21Z" fill="#5030E5"></path><path d="M18 8a5.993 5.993 0 0 1-4.42 5.79c-.5.14-1.03.21-1.58.21s-1.08-.07-1.58-.21A5.993 5.993 0 0 1 6 8c0-3.31 2.69-6 6-6s6 2.69 6 6Z" fill="#5030E5"></path><path opacity=".4" d="M22 16c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54c1.23-1.09 2-2.69 2-4.46 0-.78-.15-1.53-.42-2.21 1.83-.5 3.31-1.84 4-3.58C20.12 10.9 22 13.24 22 16Z" fill="#5030E5"></path></svg>
                            <span className=" text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
                                PROJECT M.
                            </span>
                            <button className=" rounded-md focus:outline-none focus:ring">
                                <FontAwesomeIcon icon={faAnglesLeft} />
                            </button>
                            <button className=" rounded-md lg:hidden">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
                            <ul className="p-2 border-b my-3 text-gray-500 text-lg font-medium overflow-hidden space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                                    >
                                        <span>
                                            <FontAwesomeIcon icon={faHome} />
                                        </span>
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                                    >
                                        <span>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </span>
                                        <span>Messages</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                                    >
                                        <span>
                                            <FontAwesomeIcon icon={faListCheck} />
                                        </span>
                                        <span>Tasks</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                                    >
                                        <span>
                                            <FontAwesomeIcon icon={faUsers} />
                                        </span>
                                        <span>Members</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                                    >
                                        <span>

                                            <FontAwesomeIcon icon={faGear} />
                                        </span>
                                        <span>Settings</span>
                                    </a>
                                </li>

                            </ul>
                            <div className="flex text-sm font-semibold text-gray-500 justify-between items-center">
                                <h1>MY PROJECTS</h1>
                                <FontAwesomeIcon className="" icon={faPlus} />
                            </div>
                            <ul className="p-2 mt-4 text-gray-500 overflow-hidden space-y-4">
                                <li className="bg-indigo-100 rounded-md">
                                    <a
                                        href="#"
                                        className="flex text-black font-semibold items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-green-700" />

                                        <span>Mobile App</span>

                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                                        <span>Website Redesign</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-purple-200" />
                                        <span>Design System</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-sky-200" />

                                        <span>Wireframes</span>
                                    </a>
                                </li>

                            </ul>
                        </nav>
                        {/* <!-- Sidebar footer --> */}


                        <div className="relative px-4 py-6 rounded-lg text-center space-y-4 bg-indigo-100 mb-4">
                            <div class=" absolute flex justify-center items-center backdrop-blur-md w-16 h-16 top-[-15%] left-[38%] rounded-full "><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M19.21 6.361c-1.04-2.1-3.05-3.65-5.38-4.16-2.44-.54-4.94.04-6.85 1.58a7.973 7.973 0 0 0-3.01 6.27c0 2.59 1.55 5.3 3.89 6.87v.83c-.01.28-.02.71.32 1.06.35.36.87.4 1.28.4h5.13c.54 0 .95-.15 1.23-.43.38-.39.37-.89.36-1.16v-.7c3.1-2.09 5.05-6.5 3.03-10.56Z" fill="#FBCB18"></path><path d="M15.26 21.998c-.06 0-.13-.01-.19-.03-2.01-.57-4.12-.57-6.13 0-.37.1-.76-.11-.86-.48a.69.69 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0 .37.11.59.49.48.86-.1.31-.38.51-.68.51Z" fill="#FBCB18"></path></svg></div>
                            <h1 className="text-lg font-medium">Thoughts Time</h1>
                            <p className="text-[12px]">We don't have any notice for you, till then you can share your thoughts with your peers</p>
                            <button className="p-4 bg-white">Write a message</button>
                        </div>

                    </aside>

                    <div className="flex flex-col flex-1 h-full overflow-hidden">
                        {/* <!-- Navbar --> */}
                        <header className="flex-shrink-0 border-b">
                            <div className="flex items-center justify-between p-6">

                                {/* < !--Desktop search box-- > */}
                                <div className="items-center hidden  rounded-l-md  md:flex-1 md:flex md:mr-auto px-4">

                                    <span className="bg-gray-100 px-4 p-2">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Search for anything"
                                        className="pl-2 py-3 rounded-r-md bg-gray-100 lg:max-w-sm md:py-2 md:flex-1 focus:outline-none "
                                    />
                                </div>

                                {/* <!--Navbar right-- > */}
                                <div className=" flex items-center w-full md:w-[500px]  justify-between md:justify-end space-x-3">
                                    {/* <!-- Search button --> */}


                                    <div className="items-center text-xl text-gray-500 gap-4 md:gap-8 px-4 flex">
                                        {/* <!-- Notification Button --> */}
                                        <FontAwesomeIcon className="text-lg" icon={faCalendar} />
                                        <FontAwesomeIcon icon={faMessage} />
                                        <FontAwesomeIcon icon={faBell} />
                                    </div >

                                    {/* < !--avatar button-- > */}
                                    <div className="text-right gap-6 flex items-center px-4">
                                        <div>
                                            <h1>Anima Agarwal</h1>
                                            <p className="text-gray-500">Up ,India</p>
                                        </div>
                                        <div className="" >
                                            <img
                                                className="object-cover bg-top w-12 h-12 rounded-full"
                                                src="https://mercor-project-saurav.vercel.app/assets/avatar-bdb0d5e7.png"
                                                alt="Ahmed Kamel"
                                            />
                                        </div >

                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </div>

                                </div >
                            </div >
                        </header >
                        {/* < !--Main content-- > */}
                        <main className="flex-1 max-h-full px-10 py-4 hide-scrollbar overflow-hidden overflow-y-scroll">
                            {/* <!-- Main content header --> */}
                            <div
                                className="flex flex-col justify-between pb-6 space-y-4  lg:items-center lg:space-y-0 lg:flex-row"
                            >
                                <div className="flex items-center gap-6">
                                    <h1 className="text-3xl md:text-5xl font-medium whitespace-nowrap">Mobile App</h1>
                                    <FontAwesomeIcon className="bg-indigo-200 p-1 rounded-md text-indigo-700" icon={faPen} />
                                    <FontAwesomeIcon className="bg-indigo-200 p-1 rounded-md text-indigo-700" icon={faLink} />
                                </div>
                                <div className="space-y-6 md:space-x-2 md:space-y-0 flex-end flex">
                                    <div className="flex items-center my-10 md:my-0 mx-4 gap-4">
                                        <FontAwesomeIcon className="bg-indigo-200 p-1 rounded-md text-indigo-700" icon={faAdd} />
                                        <h1 className="font-semibold text-indigo-700">Invite</h1>
                                    </div>
                                    <div className="flex -space-x-4">
                                        <img className="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800" src="https://mercor-project-saurav.vercel.app/assets/user5-00f9f7d0.png" alt="" />
                                        <img className="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800" src="https://mercor-project-saurav.vercel.app/assets/user4-456b3247.png" alt="" />
                                        <img className="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800" src="https://mercor-project-saurav.vercel.app/assets/user2-19ac1dc4.png" alt="" />
                                        <img className="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800" src="https://mercor-project-saurav.vercel.app/assets/user2-19ac1dc4.png" alt="" />
                                        <a className="flex items-center justify-center w-12 h-12 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+2</a>
                                    </div>


                                </div>
                            </div>
                            <div className="flex py-4 text-gray-500 justify-between">
                                <div className="flex gap-3">
                                    <div className="flex items-center border-2 rounded-md gap-4 px-3 py-2">
                                        <FontAwesomeIcon icon={faFilter} />
                                        <h1>Filter</h1>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </div>
                                    <div className="flex items-center border-2 rounded-md gap-4 px-3 py-2">
                                        <FontAwesomeIcon icon={faCalendarDay} />
                                        <h1>Today</h1>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </div>
                                </div>
                                <div className="flex hidden md:flex items-center gap-6">
                                    <div className="flex items-center border-2 rounded-md gap-4 px-3 py-2">
                                        <FontAwesomeIcon icon={faUser} />
                                        <h1>Share</h1>
                                    </div>
                                    <div className="w-1 h-[80%] my-auto rounded-full bg-gray-500"></div>
                                    <div className="flex text-xl items-center gap-4">
                                        <FontAwesomeIcon className="bg-indigo-700 p-3 rounded-lg text-white" icon={faBoxArchive} />
                                        <FontAwesomeIcon icon={faTableCells} />
                                    </div>
                                </div>
                            </div>
                            
                            <DragDropContext onDragEnd={() => { }}>
                                <div className=" text-gray-700 ">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:space-x-6 ">
                                        <Droppable droppableId="todoList">
                                            {(provided) => (
                                                <div ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                    className="flex flex-col flex-shrink-0 w-full bg-gray-100 p-6">
                                                    <div className="flex items-center gap-3 pb-6 flex-shrink-0 border-b-4 border-sky-500 h-10 px-2 py-2">
                                                        <div className="bg-sky-500 w-2 h-2 rounded-full"></div>
                                                        <span className="block text-lg font-medium">To Do</span>
                                                        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-gray-700  bg-gray-400 rounded-full bg-opacity-30">{todo[0]?.length}</span>
                                                    </div>
                                                    <div
                                                        className="flex flex-col pb-2 overflow-auto">

                                                        {todo[0]?.map((data, index) => (
                                                            <Draggable draggableId={data.id} index={index}>
                                                                {(provided,snapshot) => (
                                                                    <div
                                                                        snapshot={snapshot}
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        className="flex flex-col items-start p-10 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                                                    >
                                                                        <div className="flex items-center justify-between w-full">

                                                                            {data.priority === "Low" &&
                                                                                < span className="flex items-center h-6 px-3 text-xs font-semibold text-orange-500 bg-orange-100 rounded-lg">{data?.priority}</span>
                                                                            }
                                                                            {data.priority === "High" &&
                                                                                < span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-lg">{data?.priority}</span>
                                                                            }
                                                                            {data.priority === "Completed" &&
                                                                                < span className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-lg">{data?.priority}</span>
                                                                            }
                                                                            <button className="  w-5 h-5 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                                                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                        <h1 className="mt-3 font-medium text-2xl">{data?.title}</h1>
                                                                        <img className="rounded-lg" src={`${data?.image}`} alt="" />
                                                                        <h4 className="mt-3 text-sm font-medium">{data?.para}</h4>
                                                                        <div className="flex justify-between w-full mt-3 mt-10 text-md font-medium text-gray-400">
                                                                            <div>
                                                                                <img className="w-10 h-10 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg' />
                                                                            </div>
                                                                            <div className="flex">
                                                                                <div className="flex items-center">
                                                                                    <FontAwesomeIcon icon={faComment} />
                                                                                    <span className="ml-1 leading-none">{data.comments} Comments</span>
                                                                                </div>
                                                                                <div className=" flex items-center ml-4">
                                                                                    <FontAwesomeIcon icon={faFile} />
                                                                                    <span className="ml-1 leading-none">{data.files} Files</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                            </Draggable>
                                                        ))}
                                                    </div>
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                        <Droppable droppableId="onProgressList">

                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                    className="flex flex-col flex-shrink-0 w-full bg-gray-100 p-6">
                                                    <div className="flex items-center gap-3 pb-6 flex-shrink-0 border-b-4 border-orange-500 h-10 px-2 py-2">
                                                        <div className="bg-orange-500 w-2 h-2 rounded-full"></div>
                                                        <span className="block text-lg font-medium">On Progress</span>
                                                        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-gray-700  bg-gray-400 rounded-full bg-opacity-30">{onProgress[0]?.length}</span>
                                                    </div>

                                                    <div
                                                        className="flex flex-col pb-2 overflow-auto">
                                                        {onProgress[0]?.map((data, index) => (
                                                            <Draggable draggableId={data.id} index={index}>
                                                                {(provided) => (
                                                                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="flex flex-col items-start p-10 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" key={index}>
                                                                        <div className="flex items-center justify-between w-full">

                                                                            {data.priority === "Low" &&
                                                                                < span className="flex items-center h-6 px-3 text-xs font-semibold text-orange-500 bg-orange-100 rounded-lg">{data?.priority}</span>
                                                                            }
                                                                            {data.priority === "High" &&
                                                                                < span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-lg">{data?.priority}</span>
                                                                            }
                                                                            {data.priority === "Completed" &&
                                                                                < span className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-lg">{data?.priority}</span>
                                                                            }
                                                                            <button className="  w-5 h-5 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                                                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                        <h1 className="mt-3 font-medium text-2xl">{data?.title}</h1>
                                                                        <img className="rounded-lg" src={`${data?.image}`} alt="" />
                                                                        <h4 className="mt-3 text-sm font-medium">{data?.para}</h4>
                                                                        <div className="flex justify-between w-full mt-3 mt-10 text-md font-medium text-gray-400">
                                                                            <div>
                                                                                <img className="w-10 h-10 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg' />
                                                                            </div>
                                                                            <div className="flex">
                                                                                <div className="flex items-center">
                                                                                    <FontAwesomeIcon icon={faComment} />
                                                                                    <span className="ml-1 leading-none">{data.comments} Comments</span>
                                                                                </div>
                                                                                <div className=" flex items-center ml-4">
                                                                                    <FontAwesomeIcon icon={faFile} />
                                                                                    <span className="ml-1 leading-none">{data.files} Files</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                            </Draggable>
                                                        ))}
                                                    </div>
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>

                                        <Droppable droppableId="doneList">
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                    className="flex flex-col flex-shrink-0 w-full bg-gray-100 p-6">
                                                    <div className="flex items-center gap-3 pb-6 flex-shrink-0 border-b-4 border-green-500 h-10 px-2 py-2">
                                                        <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                                                        <span className="block text-lg font-medium">Done</span>
                                                        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-gray-700  bg-gray-400 rounded-full bg-opacity-30">{done[0]?.length}</span>
                                                    </div>
                                                    <div
                                                        className="flex flex-col pb-2 overflow-auto">
                                                        {done[0]?.map((data, index) => (
                                                            <Draggable draggableId={data.id} index={index} type="TodoList">
                                                                {(provided) => (
                                                                    <div
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        ref={provided.innerRef}
                                                                        className="flex flex-col items-start p-10 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" key={index}>
                                                                        <div className="flex items-center justify-between w-full">

                                                                            {data.priority === "Low" &&
                                                                                < span className="flex items-center h-6 px-3 text-xs font-semibold text-orange-500 bg-orange-100 rounded-lg">{data?.priority}</span>
                                                                            }
                                                                            {data.priority === "High" &&
                                                                                < span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-lg">{data?.priority}</span>
                                                                            }
                                                                            {data.priority === "Completed" &&
                                                                                < span className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-lg">{data?.priority}</span>
                                                                            }
                                                                            <button className="  w-5 h-5 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                                                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                        <h1 className="mt-3 font-medium text-2xl">{data?.title}</h1>
                                                                        <img className="rounded-lg" src={`${data?.image}`} alt="" />
                                                                        <h4 className="mt-3 text-sm font-medium">{data?.para}</h4>
                                                                        <div className="flex justify-between w-full mt-3 mt-10 text-md font-medium text-gray-400">
                                                                            <div>
                                                                                <img className="w-10 h-10 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg' />
                                                                            </div>
                                                                            <div className="flex">
                                                                                <div className="flex items-center">
                                                                                    <FontAwesomeIcon icon={faComment} />
                                                                                    <span className="ml-1 leading-none">{data.comments} Comments</span>
                                                                                </div>
                                                                                <div className=" flex items-center ml-4">
                                                                                    <FontAwesomeIcon icon={faFile} />
                                                                                    <span className="ml-1 leading-none">{data.files} Files</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                            </Draggable>
                                                        ))}
                                                    </div>

                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                </div>
                            </DragDropContext>
                        </main >
                    </div >


                </div >
            </div >
        </>
    )
}

export default Dashboard;