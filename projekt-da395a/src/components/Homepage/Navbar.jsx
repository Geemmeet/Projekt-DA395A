'use client';

import { Disclosure } from '@headlessui/react'
import DrawerComponent from '../ShowSavedRecipes/DrawerComponent';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#E7E4F7]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <div className="flex shrink-0 items-center">
              <a href="/">
              <img
                alt="Logo"
                src="/fast-food-placeholder.svg"
                className="block h-8 w-auto"
              />
              </a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <DrawerComponent />
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
