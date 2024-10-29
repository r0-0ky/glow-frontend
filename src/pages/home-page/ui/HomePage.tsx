import classes from './styles.module.scss';
import cn from 'classnames';

export const HomePage: React.FC = () => {
  return (
    <>
      <main>
        <h1 className={cn(classes.title)}>Glow</h1>
      </main>
    </>
  )
}