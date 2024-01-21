import css from './section.module.css';

const Block = ({title, children}) => {
  return (
    <div className={css.block}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Block;
