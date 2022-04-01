import React, { useState } from 'react'
import Link from '../Link'
// import LanguageSwitcher from '../LanguageSwitcher'
import MobileSubMenu from './MobileSubMenu'
import { SearchDocs } from '../search-ui'
import ThemeToggle from '../ThemeToggle'

import { useSiteMetadata } from '../../components/Hooks/use-site-metadata'

interface MobileMenuProps {
  toggleMenu: () => void
  navItems: {
    name: string
    subMenu: {
      linkTitle: string
      link: string
      external: boolean
      items?: { linkTitle: string; link: string; external: boolean }[]
    }[]
  }[]
  currentLang?: string
  langConfig?: {
    code: string
    dataFormat: string
    hrefLang: string
    langDir: string
    localName: string
    name: string
  }[]
}

const MobileMenu = ({ toggleMenu, navItems }: MobileMenuProps) => {
  const [isTechMenuOpen, setIsTechMenuOpen] = useState(false)
  const [isDevMenuOpen, setIsDevMenuOpen] = useState(false)
  const [isVisionMenuOpen, setIsVisionMenuOpen] = useState(false)
  const [isEcoMenuOpen, setIsEcoMenuOpen] = useState(false)

  const { siteMetadata } = useSiteMetadata()

  return (
    <nav className="lg:hidden absolute inset-0 bg-substrateGray-light dark:bg-darkBackground z-90 animate-fade-in-right">
      <div className="h-16 px-6 flex items-center justify-between">
        <div className="w-32">
          <Link to={siteMetadata.substrateIO}>
            <svg
              className={`fill-current text-substrateDark dark:text-substrateWhite`}
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 419.75 58.11"
            >
              <path d="M28.33,16.42A16.57,16.57,0,0,1,34.06,26.5H22.54a6.44,6.44,0,0,0-2.27-3.86,6.93,6.93,0,0,0-4.43-1.4,4.85,4.85,0,0,0-3.17.9,3.14,3.14,0,0,0-1.08,2.56,3,3,0,0,0,2,2.8,31.55,31.55,0,0,0,6.23,1.88,62.91,62.91,0,0,1,7.56,2.19,12.52,12.52,0,0,1,5.11,3.64A10,10,0,0,1,34.63,42a10.38,10.38,0,0,1-1.87,6.12,12.4,12.4,0,0,1-5.4,4.17A21.07,21.07,0,0,1,19,53.78q-8.15,0-13-3.6A15.17,15.17,0,0,1,0,39.89H11.88a5.31,5.31,0,0,0,2.2,4A8.26,8.26,0,0,0,19,45.22a4.59,4.59,0,0,0,3.17-1,3.26,3.26,0,0,0,1.08-2.55,3.08,3.08,0,0,0-2-3,36.19,36.19,0,0,0-6.45-1.91,51.23,51.23,0,0,1-7.34-2,12.12,12.12,0,0,1-5-3.5A9.71,9.71,0,0,1,.43,24.7,10.75,10.75,0,0,1,4.54,16q4.09-3.34,11.59-3.35T28.33,16.42Z" />
              <path d="M82.37,13.1V53.28H70V46a13.32,13.32,0,0,1-5.15,5.61,14.88,14.88,0,0,1-7.95,2.09q-6.91,0-11-4.61T41.83,36.43V13.1H54.07V34.92a8.93,8.93,0,0,0,2.13,6.37,7.46,7.46,0,0,0,5.72,2.27,7.55,7.55,0,0,0,5.9-2.38C69.26,39.6,70,37.34,70,34.42V13.1Z" />
              <path d="M126.39,15.08a17.15,17.15,0,0,1,6.2,7.13,24.82,24.82,0,0,1,2.26,11,24.87,24.87,0,0,1-2.26,11,17.05,17.05,0,0,1-6.2,7.16,16.22,16.22,0,0,1-8.89,2.48,14.57,14.57,0,0,1-7.92-2.08A12.16,12.16,0,0,1,104.76,46v7.27H92.45V0h12.31V20.38a12.11,12.11,0,0,1,4.82-5.69,14.57,14.57,0,0,1,7.92-2.09A16.3,16.3,0,0,1,126.39,15.08ZM107.17,26a10,10,0,0,0-2.48,7.16,10,10,0,0,0,2.48,7.13,9,9,0,0,0,12.74.07,10.16,10.16,0,0,0,2.42-7.2,10.16,10.16,0,0,0-2.42-7.2,8.27,8.27,0,0,0-6.37-2.59A8.39,8.39,0,0,0,107.17,26Z" />
              <path d="M168.51,16.42a16.57,16.57,0,0,1,5.73,10.08H162.72a6.39,6.39,0,0,0-2.27-3.86,6.93,6.93,0,0,0-4.43-1.4,4.85,4.85,0,0,0-3.17.9,3.14,3.14,0,0,0-1.08,2.56,3,3,0,0,0,2,2.8A31.55,31.55,0,0,0,160,29.38a62.91,62.91,0,0,1,7.56,2.19,12.52,12.52,0,0,1,5.11,3.64A10,10,0,0,1,174.81,42a10.38,10.38,0,0,1-1.87,6.12,12.4,12.4,0,0,1-5.4,4.17,21,21,0,0,1-8.35,1.51q-8.13,0-13-3.6a15.17,15.17,0,0,1-6-10.29h11.88a5.34,5.34,0,0,0,2.2,4,8.26,8.26,0,0,0,4.93,1.37,4.59,4.59,0,0,0,3.17-1,3.26,3.26,0,0,0,1.08-2.55,3.08,3.08,0,0,0-2-3A36.19,36.19,0,0,0,155,36.79a51.23,51.23,0,0,1-7.34-2,12.12,12.12,0,0,1-5-3.5,9.71,9.71,0,0,1-2.09-6.58A10.75,10.75,0,0,1,144.72,16q4.09-3.34,11.59-3.35T168.51,16.42Z" />
              <path d="M205.41,42.7V53.28h-5.54c-4.7,0-8.37-1.16-11-3.49S185,43.61,185,38.23V23.47h-5.39V13.1H185V3.24h12.32V13.1h8.06V23.47h-8.06v15a4.5,4.5,0,0,0,1,3.31,4.67,4.67,0,0,0,3.28.94Z" />
              <path d="M232.88,14.83a15.14,15.14,0,0,1,7.88-2.16V25.85h-3.52c-3.27,0-5.8.69-7.6,2.09s-2.7,3.74-2.7,7.05V53.28H214.63V13.1h12.31v7.56A17.61,17.61,0,0,1,232.88,14.83Z" />
              <path d="M269.28,14.69a12.55,12.55,0,0,1,4.89,5.69V13.1h12.24V53.28H274.17V46a12.6,12.6,0,0,1-4.89,5.69,14.57,14.57,0,0,1-7.92,2.08,16.25,16.25,0,0,1-8.9-2.48,17,17,0,0,1-6.19-7.16,24.87,24.87,0,0,1-2.27-11,24.82,24.82,0,0,1,2.27-11,17.13,17.13,0,0,1,6.19-7.13,16.34,16.34,0,0,1,8.9-2.48A14.57,14.57,0,0,1,269.28,14.69ZM258.94,26a10.2,10.2,0,0,0-2.41,7.2,10.2,10.2,0,0,0,2.41,7.2,9.05,9.05,0,0,0,12.75-.07,10.06,10.06,0,0,0,2.48-7.13A10,10,0,0,0,271.69,26a8.39,8.39,0,0,0-6.37-2.63A8.31,8.31,0,0,0,258.94,26Z" />
              <path d="M318.81,42.7V53.28h-5.54q-7.06,0-11-3.49t-3.93-11.56V23.47H293V13.1h5.4V3.24h12.32V13.1h8.06V23.47h-8.06v15a4.5,4.5,0,0,0,1,3.31,4.66,4.66,0,0,0,3.27.94Z" />
              <path d="M364.24,35.42H336.38q.21,4.55,2.3,6.52a7.43,7.43,0,0,0,5.33,2,7.32,7.32,0,0,0,4.54-1.37A6.36,6.36,0,0,0,350.92,39h13a17,17,0,0,1-3.45,7.6,18.54,18.54,0,0,1-6.77,5.26,23.17,23.17,0,0,1-19.62-.58A17.69,17.69,0,0,1,327,44.14a22.22,22.22,0,0,1-2.6-11,22.5,22.5,0,0,1,2.56-11,17.56,17.56,0,0,1,7.16-7.13,23.66,23.66,0,0,1,21,0,17.33,17.33,0,0,1,7,6.87,20.56,20.56,0,0,1,2.48,10.19A17,17,0,0,1,364.24,35.42ZM350,24.3a7.8,7.8,0,0,0-5.43-2,8,8,0,0,0-5.62,2,8.41,8.41,0,0,0-2.52,5.9h15.7C352.19,27.6,351.49,25.62,350,24.3Z" />
              <path
                className="fill-current text-substrateGreen"
                d="M419.75,46.09v12H375.19v-12Z"
              />
            </svg>
          </Link>
        </div>
        <div onClick={() => toggleMenu()} className="h-auto cursor-pointer">
          <svg
            className="fill-current text-substrateDark dark:text-white"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.9929 3.02143C19.5491 2.4652 19.5491 1.56337 18.9929 1.00714C18.4366 0.450913 17.5348 0.450913 16.9786 1.00714L10 7.98571L3.02143 1.00714C2.4652 0.450912 1.56337 0.450913 1.00714 1.00714C0.450913 1.56337 0.450913 2.4652 1.00714 3.02143L7.98571 10L1.00714 16.9786C0.450912 17.5348 0.450913 18.4366 1.00714 18.9929C1.56337 19.5491 2.4652 19.5491 3.02143 18.9929L10 12.0143L16.9786 18.9929C17.5348 19.5491 18.4366 19.5491 18.9929 18.9929C19.5491 18.4366 19.5491 17.5348 18.9929 16.9786L12.0143 10L18.9929 3.02143Z" />
          </svg>
        </div>
      </div>
      <div className="bg-substrateGray-light dark:bg-darkBackground h-screen z-20">
        <div className="py-8">
          {navItems.map((item, index: number) => {
            return (
              <div
                key={index}
                onClick={() => {
                  index === 0
                    ? setIsTechMenuOpen(!isTechMenuOpen)
                    : index === 2
                    ? setIsVisionMenuOpen(!isVisionMenuOpen)
                    : index === 1
                    ? setIsDevMenuOpen(!isDevMenuOpen)
                    : index === 3
                    ? setIsEcoMenuOpen(!isEcoMenuOpen)
                    : null
                }}
                className="py-3 hover:bg-substrateGreen-light dark:hover:bg-green-700 font-medium transform transition-all duration-75 ease-in-out hover:font-bold"
              >
                <div className="px-6 flex items-center justify-between focus:outline-none cursor-pointer">
                  <div className="text-2xl">{item.name}</div>
                  <svg
                    name="arrow-next"
                    className="fill-current text-black dark:text-white"
                    version="1.2"
                    baseProfile="tiny"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 7 13"
                    overflow="visible"
                    xmlSpace="preserve"
                    width="13"
                    height="13"
                  >
                    <polygon points="1.4,12.3 0.6,11.7 5.3,6.5 0.6,1.3 1.4,0.7 6.7,6.5 "></polygon>
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
        <div className="px-6">
          <SearchDocs />
        </div>
        {/* <LanguageSwitcher currentLang={currentLang} langConfig={langConfig} /> */}
        <div className="px-6 py-8">
          <ThemeToggle />
        </div>
      </div>
      {isTechMenuOpen && (
        <MobileSubMenu
          toggleMobileNav={toggleMenu}
          toggleSubMenu={() => setIsTechMenuOpen(!isTechMenuOpen)}
          navItem={navItems[0]}
        />
      )}
      {isDevMenuOpen && (
        <MobileSubMenu
          toggleMobileNav={toggleMenu}
          toggleSubMenu={() => setIsDevMenuOpen(!isDevMenuOpen)}
          navItem={navItems[1]}
        />
      )}
      {isVisionMenuOpen && (
        <MobileSubMenu
          toggleMobileNav={toggleMenu}
          toggleSubMenu={() => setIsVisionMenuOpen(!isVisionMenuOpen)}
          navItem={navItems[2]}
        />
      )}
      {isEcoMenuOpen && (
        <MobileSubMenu
          toggleMobileNav={toggleMenu}
          toggleSubMenu={() => setIsEcoMenuOpen(!isEcoMenuOpen)}
          navItem={navItems[3]}
        />
      )}
    </nav>
  )
}
export default MobileMenu
