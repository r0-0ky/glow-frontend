'use client';

import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import bigLine from '../images/big-line.webp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { Cursor } from '@/src/shared/assets';
import { Button } from 'antd/lib';
import { useRouter } from 'next/navigation';

export const HomePage: React.FC = () => {
  const router = useRouter()
  const randomnumber = () => Math.floor(Math.random() * (900 - 0 + 1)) + 0
  gsap.registerPlugin(useGSAP);
  const tl = gsap.timeline({repeat: -1});
  const tl2 = gsap.timeline({repeat: -1});
  const tl3 = gsap.timeline({repeat: -1});
  const tl4 = gsap.timeline({repeat: -1});

  useGSAP(() => {
    gsap.to('#main_subtitle', { opacity: 1, duration: 0.7, delay: 0.7 });
    gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 0.3, delay: 0.3, ease: 'sine.out' })
    gsap.fromTo('#frame_wrapper', { opacity: 0 }, { opacity: 1, duration: 0.3, delay: 1, ease: 'sine.out' })
    gsap.fromTo('#title_back', { left: 0 }, { left: 6, duration: 0.2, opacity: 0.63, delay: 0.5, ease: 'sine.out' })

    tl.fromTo('[class*="cursor1"]', { left: 0, top: 0, duration: 1, delay: 2}, { left: randomnumber(), top: randomnumber(), duration: 1, delay: 4, ease: 'sine.out'})
      .to('[class*="cursor1"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 4, ease: 'sine.out'})
      .to('[class*="cursor1"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 5, ease: 'sine.out'})
      .to('[class*="cursor1"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 6, ease: 'sine.out'})
      .to('[class*="cursor1"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 7, ease: 'sine.out'})
      .to('[class*="cursor1"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 4, ease: 'sine.out'})
      .to('[class*="cursor1"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 5, ease: 'sine.out'})
      .to('[class*="cursor1"]', { left: 0, top: 0, duration: 1, delay: 2})

    tl2.fromTo('[class*="cursor2"]', { left: 400, top: 0, duration: 1, delay: 2}, { left: randomnumber(), top: randomnumber(), duration: 1, delay: 6, ease: 'sine.out'})
      .to('[class*="cursor2"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 4, ease: 'sine.out'})
      .to('[class*="cursor2"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 3, ease: 'sine.out'})
      .to('[class*="cursor2"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 5, ease: 'sine.out'})
      .to('[class*="cursor2"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 4, ease: 'sine.out'})
      .to('[class*="cursor2"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 5, ease: 'sine.out'})
      .to('[class*="cursor2"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 6, ease: 'sine.out'})
      .to('[class*="cursor2"]', { left: 400, top: 0, duration: 1, delay: 2})

    tl3.fromTo('[class*="cursor3"]', { left: 70, top: 160, duration: 1, delay: 2}, { left: randomnumber(), top: randomnumber(), duration: 1, delay: 3, ease: 'sine.out'})
      .to('[class*="cursor3"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 5, ease: 'sine.out'})
      .to('[class*="cursor3"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 6, ease: 'sine.out'})
      .to('[class*="cursor3"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 4, ease: 'sine.out'})
      .to('[class*="cursor3"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 4, ease: 'sine.out'})
      .to('[class*="cursor3"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 5, ease: 'sine.out'})
      .to('[class*="cursor3"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 5, ease: 'sine.out'})
      .to('[class*="cursor3"]', { left: 70, top: 160, duration: 1, delay: 2})

    tl4.fromTo('[class*="cursor4"]', { left: 300, top: 240, duration: 1, delay: 2}, { left: randomnumber(), top: randomnumber(), duration: 1, delay: 4, ease: 'sine.out'})
      .to('[class*="cursor4"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 5, ease: 'sine.out'})
      .to('[class*="cursor4"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 6, ease: 'sine.out'})
      .to('[class*="cursor4"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 4, ease: 'sine.out'})
      .to('[class*="cursor4"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 5, ease: 'sine.out'})
      .to('[class*="cursor4"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 5, ease: 'sine.out'})
      .to('[class*="cursor4"]', { left: randomnumber(), top: randomnumber(), duration: 1, delay: 5, ease: 'sine.out'})
      .to('[class*="cursor4"]', { left: 300, top: 240, duration: 1, delay: 2})
  })

  const handleMouseEnter = (className: string) => {
    switch (className) {
      case 'cursor1':
        gsap.to('[class*="cursor1"]', { left: 0, top: 0, duration: 1, ease: 'sine.out', onComplete() {
          tl.restart()
        }})
        break
      case 'cursor2':
        gsap.to('[class*="cursor2"]', { left: 400, top: 0, duration: 1, ease: 'sine.out', onComplete() {
          tl2.restart()
        }})
        break
      case 'cursor3':
        gsap.to('[class*="cursor3"]', { left: 70, top: 160, duration: 1, ease: 'sine.out', onComplete() {
          tl3.restart()
        }})
        break
      case 'cursor4':
        gsap.to('[class*="cursor4"]', { left: 300, top: 240, duration: 1, ease: 'sine.out', onComplete() {
          tl4.restart()
        }})
    }
  }

  return (
    <>
      <main className={cn(classes.main)}>
        <section className={cn(classes.info_section)}>
          <h1 id='title' className={cn(classes.title)}>Glow <span id='title_back' className={cn(classes.title_back)}>Glow</span></h1>
          <p id='main_subtitle' className={cn(classes.main_subtitle)}>Create your powerful product design <span className={cn(classes.span)}>TOGETHER</span></p>
          <div id='frame_wrapper' className={cn(classes.frame_wrapper)}>
            <Cursor onMouseEnter={() => handleMouseEnter('cursor1')} className={cn(classes.cursor, 'cursor1')} />
            <Cursor onMouseEnter={() => handleMouseEnter('cursor2')} fillColor='#403DFF' className={cn(classes.cursor, 'cursor2')} />
            <Cursor onMouseEnter={() => handleMouseEnter('cursor3')} fillColor='#ec4899' className={cn(classes.cursor, 'cursor3')} />
            <Cursor onMouseEnter={() => handleMouseEnter('cursor4')} fillColor='#FF3D3D' className={cn(classes.cursor, 'cursor4')} />
            <div className={cn(classes.frame_container)}>
              <div className={cn(classes.frame)}>
                <span className={cn(classes.frame_square)} />
                <span className={cn(classes.frame_square)} />
                <span className={cn(classes.frame_square)} />
                <span className={cn(classes.frame_square)} />
              </div>
              <Button onClick={() => router.push('/login')} className={classes.start_create}>Start create</Button>
            </div>
          </div>
        </section>
        <section className={cn(classes.what_section)}>
          <h2 className={cn(classes.what_title)}>what is GLOW?</h2>
          <div className={cn(classes.paragraph)}>
            <p>Glow  makes your daily work easier and faster. Integrated AI allows you to create great design products two clicks</p>
            <span className={cn(classes.paragraph_square)} />
            <span className={cn(classes.paragraph_square)} />
            <span className={cn(classes.paragraph_square)} />
            <span className={cn(classes.paragraph_square)} />
            <Cursor fillColor='#FFE500' className={classes.cursorFirst} />
          </div>
          <div className={cn(classes.paragraph)}>
            <p>The ability to select and edit 3D templates right in glow allows you to create modern amazing interfaces!</p>
            <span className={cn(classes.paragraph_square)} />
            <span className={cn(classes.paragraph_square)} />
            <span className={cn(classes.paragraph_square)} />
            <span className={cn(classes.paragraph_square)} />
            <Cursor fillColor='#FF7A00' className={classes.cursorSecond} />
          </div>
          <div className={cn(classes.paragraph)}>
            <p>Built-in task manager allows you to organize work in a team. Create tasks right inside glow!</p>
            <span className={cn(classes.paragraph_square)} />
            <span className={cn(classes.paragraph_square)} />
            <span className={cn(classes.paragraph_square)} />
            <span className={cn(classes.paragraph_square)} />
          </div>
        </section>
        <section className={cn(classes.image_section)}>
          <p className={classes.image_text}>Give the world a <span className={classes.image_text_gradient}>glow</span>!</p>
          <Image alt='big-line' className={cn(classes.image)} src={bigLine} />
        </section>
      </main>
      <footer className={classes.footer}>
        <div className={classes.footerContent}>
          <a className={classes.mailLink} href="mailto:glow@gmail.com">glow@gmail.com</a>
          <span className={classes.writeUs}>Write us!</span>
        </div>
        <nav className={classes.footerNav}>
          <Link href='https://github.com' className={classes.link} />
          <Link href='https://github.com' className={classes.link} />
          <Link href='https://github.com' className={classes.link} />
        </nav>
      </footer>
    </>
  )
}