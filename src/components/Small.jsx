function Small({ text, className }) {
  return (
    <small className={`${className} text-(--text-secondary) text-[16px]`}>
      {text}
    </small>
  );
}

export default Small;
