import IconButton from '@/components/ui/IconButton'
import { faBars, faHome, faTimes, faTree } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@styled-system/css'
import { AnimatePresence, motion } from 'framer-motion'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState, type FC } from 'react'

const menuItems = [
  { label: 'Inicio', href: '/', icon: faHome },
  { label: 'EntGamers.pro', href: 'https://entgamers.pro', icon: faTree }
]

const Menu: FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menu = useRef<HTMLDivElement | null>(null)
  const pathName = usePathname()

  const handleClickAway = useCallback((event: MouseEvent) => {
    if (openMenu && menu?.current != null && !menu.current.contains(event.target as Node)) {
      setOpenMenu(false)
    }
  }, [openMenu])

  useEffect(() => {
    document.addEventListener('click', handleClickAway)
    return () => {
      document.removeEventListener('click', handleClickAway)
    }
  }, [handleClickAway])

  return (
    <>
      <IconButton
        onClick={() => { setOpenMenu(true) }}
        aria-label="Open menu"
        color="primary"
        size="medium"
      >
        <FontAwesomeIcon icon={faBars} fixedWidth />
      </IconButton>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key="backdrop"
            className={css({
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.45)',
              zIndex: 'modalBackdrop'
            })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={menu}
              className={css({
                position: 'absolute',
                top: 0,
                right: 0,
                width: { base: '100%', sm: '250px' },
                height: '100vh',
                backgroundColor: 'surface',
                overflow: 'scroll',
                zIndex: 'modal',
                _backdrop: {
                  backgroundColor: 'gray.900',
                  opacity: '75%'
                }
              })}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ease: 'easeInOut' } }}
              exit={{ x: '100%', opacity: 0 }}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  width: '100%',
                  height: '60px',
                  paddingBlock: 'medium',
                  paddingInline: 'medium'
                })}
              >
                <IconButton
                  onClick={() => { setOpenMenu(false) }}
                  aria-label="Close menu"
                  color="danger"
                >
                  <FontAwesomeIcon icon={faTimes} fixedWidth />
                </IconButton>
              </div>
              <hr className={css({
                borderTop: '1px solid token(colors.border)'
              })} />
              <nav>
                <ul
                  className={css({
                    listStyle: 'none',
                    paddingInline: '0px'
                  })}
                >
                  {menuItems.map((item, index) => {
                    const AnchorClassName = css({
                      display: 'block',
                      paddingBlock: 'medium',
                      paddingInline: 'small',
                      color: '',
                      textDecoration: 'none',
                      transitionDuration: 'fast',
                      transitionProperty: 'background-color, color',
                      transitionTimingFunction: 'easeInOut',
                      '&:hover': {
                        backgroundColor: 'primary',
                        color: 'primary.contrast'
                      },
                      '&[data-current=true]': {
                        backgroundColor: 'info',
                        color: 'info.contrast'
                      }
                    })
                    return (
                      <li
                        key={`menu-item-${index}`}
                      >
                        {item.href.startsWith('/')
                          ? (
                            <NextLink
                              className={AnchorClassName}
                              href={item.href}
                              data-current={pathName === item.href}
                            >
                              <FontAwesomeIcon icon={item.icon} fixedWidth size="lg" />
                          &nbsp;
                              {item.label}
                            </NextLink>
                          )
                          : (
                            <a
                              className={AnchorClassName}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-current={pathName === item.href}
                            >
                              <FontAwesomeIcon icon={item.icon} fixedWidth size="lg" />
                          &nbsp;
                              {item.label}
                            </a>
                          )}
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Menu
