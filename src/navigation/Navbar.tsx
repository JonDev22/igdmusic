import { Fragment } from "react";
import {
    Disclosure,
    Transition,
    DisclosurePanel,
    DisclosureButton,
    TabList,
    Tab,
} from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
    UserCircleIcon,
    MusicalNoteIcon,
} from "@heroicons/react/24/outline";

interface NavbarProps {
    tabs: { name: string }[];
}

function Navbar({ tabs }: NavbarProps) {
    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between items-center">
                            {/* Logo on the right */}
                            <div className="shrink-0 flex gap-2 items-center">
                                <MusicalNoteIcon className="w-10 h-10 font-bold text-white bg-linear-120 from-blue-900 to-blue-400 p-2 rounded-xl" />
                                <p className="text-black font-bold text-xl">
                                    IGDuisburg
                                </p>
                            </div>

                            {/* Desktop navigation */}
                            <TabList className="hidden md:flex space-x-2 items-center">
                                {tabs.map((item) => (
                                    <Tab as={Fragment} key={item.name}>
                                        {({ hover, selected }) => (
                                            <p
                                                className={`px-4 py-2 rounded-lg bg-blue-600 text-white ${hover && "hover:bg-blue-700 hover:cursor-pointer"} ${selected && "bg-blue-900"}`}
                                            >
                                                {item.name}
                                            </p>
                                        )}
                                    </Tab>
                                ))}
                                <Tab as={Fragment}>
                                    {({ hover, selected }) => (
                                        <UserCircleIcon
                                            className={`rounded-lg text-black ${hover && "hover:text-gray-500 hover:cursor-pointer"} ${selected && "text-gray-500"} h-10 w-10`}
                                        />
                                    )}
                                </Tab>
                            </TabList>

                            {/* Mobile menu button */}
                            <div className="md:hidden flex items-center">
                                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <DisclosurePanel className="md:hidden">
                            <TabList className="space-y-1 px-2 pt-2 pb-3">
                                {tabs.map((item) => (
                                    <Tab key={item.name} as={Fragment}>
                                        {({ hover, selected }) => (
                                            <p
                                                className={`px-4 py-2 rounded-lg bg-blue-600 text-white ${hover && "hover:bg-blue-700 hover:cursor-pointer"} ${selected && "bg-blue-900"}`}
                                            >
                                                {item.name}
                                            </p>
                                        )}
                                    </Tab>
                                ))}
                                <Tab as={Fragment}>
                                    {({ hover, selected }) => (
                                        <UserCircleIcon
                                            className={`rounded-lg text-black ${hover && "hover:text-gray-500 hover:cursor-pointer"} ${selected && "text-gray-500"} h-10 w-10`}
                                        />
                                    )}
                                </Tab>
                            </TabList>
                        </DisclosurePanel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;
