import css from './feedbackoptions.module.css';

const FeedbackOptions = ({ options, addVote, makeFirstLetterToUpperCase }) => {
  const elements = options.map(name => {
    const text = makeFirstLetterToUpperCase(name);
    return (
      <button
        onClick={() => addVote(name)}
        className={css.btn}
        type="button"
        key={name}
      >
        {text}
      </button>
    );
  });

  return elements;
};

export default FeedbackOptions;
