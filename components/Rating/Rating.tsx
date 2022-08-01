import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from "react";
import { RatingProps } from "./Rating.props";
import StarIcon from "./star.svg";
import styles from "./Rating.module.css";
import cn from "classnames";

export const Rating = forwardRef(({ isEditable = false, rating, error, setRating, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedRating = ratingArray.map((rat: JSX.Element, ind: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: ind < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => onChangeRating(ind + 1)}
          onMouseLeave={() => onChangeRating(rating)}
          onClick={() => onClickRating(ind + 1)}>
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              handleSpace(e, ind + 1)}/>
        </span>
      );
    });
    setRatingArray(updatedRating);
  };

  const onChangeRating = (i: number) => {
    if(!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClickRating = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (e: KeyboardEvent<SVGAElement>, i: number) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div ref={ref} {...props} className={cn(styles.ratingWrapper, {
      [styles.error]: error
    })}>
      {ratingArray.map((rat, ind) => (
        <span key={ind}>{rat}</span>
      ))}
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
    
});