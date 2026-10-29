const SectionTag = ({ title, center, orange, dark }) => {
  return (
    <div
      className={`section-tag 
      ${center ? "center" : ""}
      ${orange ? "orange" : ""}
      ${dark ? "dark" : ""}`}
    >
      <span></span>
      {title}
      {center && <span></span>}
    </div>
  );
};

export default SectionTag;