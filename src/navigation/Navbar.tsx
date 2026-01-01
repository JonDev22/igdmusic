import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
    Disclosure,
    Transition,
    DisclosurePanel,
    DisclosureButton,
} from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
    UserCircleIcon,
    MusicalNoteIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

interface NavItem {
    name: string;
    href: string;
}

const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Musik", href: "/music" },
    // { name: "Planung", href: "/planning" },
    { name: "Werte", href: "/values" },
];

function Navbar() {
    const location = useLocation();
    const activePath = location.pathname;

    const activeClass = "bg-blue-900 text-white";
    const inactiveClass =
        "text-white px-3 py-2 rounded-2xl text-sm font-medium";

    const linkTextActive = "text-white";
    const linkTextInactive = "text-blue-900";

    const hoverClass = "hover:bg-blue-300";

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
                            <div className="hidden md:flex space-x-4 items-center">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className={`
                                            px-3 py-2 rounded-md
                                            ${
                                                activePath === item.href
                                                    ? activeClass
                                                    : `${inactiveClass} ${hoverClass}`
                                            }
                                            `}
                                    >
                                        <p
                                            className={
                                                activePath === item.href
                                                    ? linkTextActive
                                                    : linkTextInactive
                                            }
                                        >
                                            {item.name}
                                        </p>
                                    </NavLink>
                                ))}
                                <NavLink to="/login">
                                    <UserCircleIcon className="h-8 w-8 text-white" />
                                </NavLink>
                            </div>

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
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </DisclosurePanel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;
