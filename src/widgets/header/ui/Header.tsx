import Link from "next/link";
import { FC } from "react";
import s from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <Link href='/files' className={s.title}>Glow <span id='title_back' className={s.title_back}>Glow</span></Link>
      <Link className={s.profile} href='/profile'>
        <span className={s.profileLogo} />
      </Link>
    </header>
  )
}