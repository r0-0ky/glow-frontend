import Link from "next/link";
import { FC } from "react";
import s from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <Link href='/' />
      <Link href='/profile'>Профиль</Link>
    </header>
  )
}