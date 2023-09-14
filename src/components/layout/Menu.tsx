import IconButton from '@/components/ui/IconButton'
import { faBars, faHome, faTimes, faTree } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@styled/css'
import gsap from 'gsap'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState, type FC } from 'react'
import { createPortal } from 'react-dom'

const menuItems = [
  { label: 'Inicio', href: '/', icon: faHome },
  { label: 'EntGamers.pro', href: 'https://entgamers.pro', icon: faTree }
]

const Menu: FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menu = useRef<HTMLDivElement | null>(null)
  const backDrop = useRef<HTMLDivElement | null>(null)
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

  useEffect(() => {
    const tl = gsap.timeline()
    if (openMenu) {
      tl
        .delay(0.1)
        .to(backDrop.current, { duration: 0, display: 'block' })
        .to(backDrop.current, { duration: 0.3, autoAlpha: 1, display: 'block' })
        .fromTo(menu.current, { x: +350 }, { duration: 0.3, x: 0 }, '<+=.100')
    } else {
      tl
        .to(menu.current, { duration: 0.3, x: '100%' }, '<')
        .to(backDrop.current, { duration: 0, display: 'none' })
        .to(backDrop.current, { duration: 0.3, autoAlpha: 0 })
    }
    return () => { tl.kill() }
  }, [openMenu])

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
      {typeof window !== 'undefined' && createPortal((
        <div
          ref={backDrop}
          className={css({
            display: 'none',
            visibility: 'hidden',
            opacity: 0,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 'modalBackdrop'
          })}
        >
          <div
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
          </div>
        </div>
      ), document.body)}
    </>
  )
}

export default Menu
