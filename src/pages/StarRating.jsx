function StarRating({ rating }) {
    
  const fullstar = Math.floor(rating);
  const emtystar = 5 - fullstar;

  return (
    <div>
      <div style={{ fontSize: "24px", color: "#f5b50a" }}>
        {"★".repeat(fullstar)}
        {"☆".repeat(emtystar)}
      </div>
    </div>
  );
}

export default StarRating;
