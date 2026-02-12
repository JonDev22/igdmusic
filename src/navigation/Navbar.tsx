import { Fragment, useState, useEffect } from "react";
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
import Icon from "../assets/IGDIcon.png";

interface NavbarProps {
    tabs: { name: string }[];
}

function Navbar({ tabs }: NavbarProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        /* Changed bg-red to bg-transparent and made it absolute/fixed if you want it to overlay the image */
        <Disclosure as="nav" className="bg-transparent absolute w-full z-20">
            {({ open }) => (
                <>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between items-center">
                            {/* Logo section */}
                            <div className="shrink-0 flex gap-2 items-center">
                                <MusicalNoteIcon className="w-10 h-10 font-bold text-white bg-gradient-to-br from-blue-900 to-blue-400 p-2 rounded-xl" />
                                {/* Changed text-black to text-white */}
                                <p className="text-white font-bold text-xl">
                                    IGDuisburg
                                </p>
                                <img src={Icon} className="w-10 h-10 -ms-3" />
                            </div>

                            {/* Desktop navigation */}
                            {!isMobile && (
                                <TabList className="hidden md:flex space-x-2 items-center">
                                    {tabs.map((item) => (
                                        <Tab as={Fragment} key={item.name}>
                                            {({ hover, selected }) => (
                                                <p
                                                    /* Removed bg-blue-600, kept text-white, added transparent bg for hover */
                                                    className={`px-4 py-2 rounded-lg text-white transition-colors ${hover ? "bg-white/20 cursor-pointer" : ""} ${selected ? "bg-white/40" : "bg-transparent"}`}
                                                >
                                                    {item.name}
                                                </p>
                                            )}
                                        </Tab>
                                    ))}
                                    <Tab as={Fragment}>
                                        {({ hover, selected }) => (
                                            /* Changed text-black to text-white */
                                            <UserCircleIcon
                                                className={`rounded-lg text-white transition-colors ${hover ? "text-gray-300 cursor-pointer" : ""} ${selected ? "text-gray-300" : ""} h-10 w-10`}
                                            />
                                        )}
                                    </Tab>
                                </TabList>
                            )}

                            {/* Mobile menu button */}
                            <div className="md:hidden flex items-center">
                                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none">
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
                        {/* Added a semi-transparent dark background for mobile readability */}
                        <DisclosurePanel className="md:hidden bg-black/50 backdrop-blur-md">
                            {isMobile && (
                                <TabList className="space-y-1 px-2 pt-2 pb-3">
                                    {tabs.map((item) => (
                                        <Tab key={item.name} as={Fragment}>
                                            {({ hover, selected }) => (
                                                <p
                                                    className={`px-4 py-2 rounded-lg text-white ${hover ? "bg-white/20 cursor-pointer" : ""} ${selected ? "bg-white/40" : ""}`}
                                                >
                                                    {item.name}
                                                </p>
                                            )}
                                        </Tab>
                                    ))}
                                    <Tab as={Fragment}>
                                        {({ hover, selected }) => (
                                            <UserCircleIcon
                                                className={`rounded-lg text-white p-2 ${hover ? "text-gray-300 cursor-pointer" : ""} ${selected ? "text-gray-300" : ""} h-12 w-12`}
                                            />
                                        )}
                                    </Tab>
                                </TabList>
                            )}
                        </DisclosurePanel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;
