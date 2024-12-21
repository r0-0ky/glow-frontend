'use client';

import { Button } from '@nextui-org/button';
import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import bigLine from '../images/big-line.webp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const HomePage: React.FC = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.fromTo('[class*="main_subtitle"]', { opacity: 0 }, { opacity: 1, duration: 0.7, delay: 0.5 });
    gsap.fromTo('[class*="title"]', { opacity: 0 }, { opacity: 1, duration: 0.3, delay: 0.5, ease: 'sine.out' })
    gsap.fromTo('[class*="title_back"]', { left: 0 }, { left: 6, duration: 0.2, opacity: 0.63, delay: 0.7, ease: 'sine.out' })
  })

  return (
    <>
      <main className={cn(classes.main)}>
        <section className={cn(classes.info_section)}>
          <h1 className={cn(classes.title)}>Glow <span className={cn(classes.title_back)}>Glow</span></h1>
          <p className={cn(classes.main_subtitle)}>Create your powerful product design <span className={cn(classes.span)}>TOGETHER</span></p>
          <div className={cn(classes.frame_container)}>
            <div className={cn(classes.frame)}>
              <span className={cn(classes.frame_square)} />
              <span className={cn(classes.frame_square)} />
              <span className={cn(classes.frame_square)} />
              <span className={cn(classes.frame_square)} />
            </div>
            <Button className='bg-transparent border-[3px] border-[#131313] rounded-[13px] w-[300px] h-[70px] text-[25px] font-black bg-gradient-to-r from-[#FF0000] to-[#FFB800] text-transparent bg-clip-text'>Start create</Button>
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
          </div>
          <div className={cn(classes.paragraph)}>
            <p>The ability to select and edit 3D templates right in glow allows you to create modern amazing interfaces!</p>
            <span className={cn(classes.paragraph_square)} />
            <span className={cn(classes.paragraph_square)} />
            <span className={cn(classes.paragraph_square)} />
            <span className={cn(classes.paragraph_square)} />
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
          <Image alt='big-line' className={cn(classes.image)} src={bigLine} />
        </section>
      </main>
    </>
  )
}