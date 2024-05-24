import React, { useState } from "react";

/*
        -> reviews from user
        -> working functionlity user can add reviews
*/

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      rating: 5,
      message: "This is a default review. The service was excellent!",
    },
  ]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [message, setMessage] = useState("");

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating > 0 && message.trim() !== "") {
      const newReview = {
        rating: selectedRating,
        message,
      };
      setReviews([...reviews, newReview]);
      setSelectedRating(0);
      setMessage("");
    }
  };

  return (
    <div className="mt-32 flex flex-col lg:flex-row max-w-7xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-300 dark:bg-gray-50 text-black dark:text-gray-800">
      {/* Review Form */}
      <div className="flex flex-col items-center w-full lg:w-1/2">
        <h2 className="text-3xl font-semibold text-center">
          Your opinion matters!
        </h2>
        <div className="flex flex-col items-center py-6 space-y-3">
          <span className="text-center">How was your experience?</span>
          <div className="flex space-x-3">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                title={`Rate ${rating} stars`}
                aria-label={`Rate ${rating} stars`}
                onClick={() => handleRatingClick(rating)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-10 h-10 ${
                    rating <= selectedRating
                      ? "text-yellow-500 dark:text-yellow-700"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <textarea
            rows="3"
            placeholder="Message..."
            className="p-4 rounded-md resize-none text-white dark:text-gray-800 bg-gray-900 dark:bg-gray-50"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="button"
            className="py-4 my-8 font-semibold rounded-md text-gray-900 dark:text-gray-50 bg-violet-400 dark:bg-violet-600"
            onClick={handleSubmit}
          >
            Leave feedback
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-col items-center w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
        <h3 className="text-xl font-semibold">Reviews:</h3>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="mt-4 border-t pt-4 w-full">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <svg
                    key={rating}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-5 h-5 ${
                      rating <= review.rating
                        ? "text-yellow-500 dark:text-yellow-700"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-sm text-black font-bold dark:text-gray-800">
                {review.message}
              </p>
            </div>
          ))
        ) : (
          <p className="mt-4 text-sm text-black ">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default Reviews;
