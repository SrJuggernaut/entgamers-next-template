'use client'
import EntGamersLogo from '@/components/assets/EntGamersLogo'
import Menu from '@/components/layout/Menu'
import { css } from '@styled-system/css'
import { Container } from '@styled-system/jsx/container'
import Link from 'next/link'
import { useCallback, useEffect, useState, type FC } from 'react'

const Header: FC = () => {
  const [scroll, setScroll] = useState(0)
  const handleScroll = useCallback(() => {
    setScroll(window.scrollY)
  }, [])

  useEffect(() => {
    if (window !== undefined) {
      handleScroll()
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])
  return (
    <>
      <header
        className={
          css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '60px',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            transitionDuration: 'normal',
            transitionProperty: 'background-color',
            transitionTimingFunction: 'easeInOut',
            transitionDelay: 'fast',
            zIndex: 'sticky',
            '&[data-scroll=true]': {
              backgroundColor: 'gray.800'
            }
          })
        }
        data-scroll={scroll > 0}
      >
        <Container
          className={
            css({
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            })
          }
        >
          <div>
            <Link href="/">
              <EntGamersLogo height={40} />
            </Link>
          </div>
          <div>
            <Menu />
          </div>
        </Container>
      </header>
      <div
        className={css({
          height: '76px'
        })}
      />
    </>
  )
}

export default Header
