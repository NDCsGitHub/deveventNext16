"use client"; // since we are using hooks we need to declare this as a client component
import React from "react";

const BookEvent = () => {
  const [email, setEmail] = React.useState<string>("");
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div>
      {submitted ? (
        <p>Submitted already</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Book your seat:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Please enter your email"
          />

          <button
            type="submit"
          >
            Book Seat
          </button>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
