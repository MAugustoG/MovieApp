interface HandleFormatMovieReviewParams {
  rating: number;
}

export const handleFormatMovieReview = ({
  rating,
}: HandleFormatMovieReviewParams): number => {
  return parseFloat(((rating * 5) / 10).toFixed(1));
};
