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
} from "@heroicons/react/24/outline";

interface NavItem {
    name: string;
    href: string;
}

const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Music", href: "/music" },
    { name: "Contact", href: "/contact" },
];

function Navbar() {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between items-center">
                            {/* Logo on the right */}
                            <div className="shrink-0 text-white font-bold text-lg">
                                IGDuisburg
                            </div>

                            {/* Desktop navigation */}
                            <div className="hidden md:flex space-x-4 items-center">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        {item.name}
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
