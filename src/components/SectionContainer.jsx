function SectionContainer({ className, children, SectionTitle, SectionNav }) {
  return (
    <div
      className={`${className} border border-(--glass-border) rounded-2xl p-4 flex flex-col gap-6`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-white text-xl font-bold tracking-wider">
          {SectionTitle}
        </h2>
        <div className="text-(--text-secondary)">
          {SectionNav ? SectionNav : ""}
        </div>
      </div>
      {children}
    </div>
  );
}

export default SectionContainer;
