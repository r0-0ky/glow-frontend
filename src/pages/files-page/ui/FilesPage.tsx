import { ProjectCard } from "@/src/widgets/project-card";
import s from './FilesPage.module.scss';

export const FilesPage = () => {
  return (
    <main className={s.main}>
      <section className={s.cardsContainer}>
        <ProjectCard title='Project 1' href='/' />
        <ProjectCard title='Project 2' href='/' />
        <ProjectCard title='Project 3' href='/' />
      </section>
    </main>
  )
}