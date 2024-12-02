import { Button } from '@nextui-org/button';
import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import bigLine from '../images/big-line.webp';

export const HomePage: React.FC = () => {
  return (
    <>
      <main className={cn(classes.main)}>
        <section className={cn(classes.info_section)}>
          <h1 className={cn(classes.title)}>Glow</h1>
          <p className={cn(classes.main_subtitle)}>Create your powerful product design <span className={cn(classes.span)}>TOGETHER</span></p>
          <div className={cn(classes.frame_container)}>
            <div className={cn(classes.frame)}></div>
            <Button className='bg-transparent border-[3px] border-[#131313] rounded-[13px] w-[480px] h-[100px] text-[36px] font-black bg-gradient-to-r from-[#FF0000] to-[#FFB800] text-transparent bg-clip-text'>Start create</Button>
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