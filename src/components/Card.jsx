function Card({ className, children }) {
  return (
    <div
      className={`${className} p-4 border border-(--glass-border) rounded-lg bg-(--glass-bg)`}
    >
      {children}
    </div>
  );
}

export default Card;
