const TestimonialCard = ({ name, role, text }) => {
  return (
    <div className="testimonial-card">

      <h3>{name}</h3>

      <h4>{role}</h4>

      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <i className="bi bi-star-fill" key={index}></i>
        ))}
      </div>

      <p>{text}</p>

    </div>
  );
};

export default TestimonialCard;