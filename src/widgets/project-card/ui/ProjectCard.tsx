import Link from "next/link"
import { FC } from "react"
import { ProjectCardProps } from "./types"
import s from './ProjectCard.module.scss'

export const ProjectCard: FC<ProjectCardProps> = ({
  href,
  title,
  image
}) => {
  return (
    <article className={s.container}>
      <span className={s.title}>{title}</span>
      <Link className={s.card} href={href} />
    </article>
  )
}