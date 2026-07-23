interface TitleImageProps {
  /** Resolved image URL */
  src?: string;
  className?: string;
  imgClassName?: string;
  /** kept for API compatibility, unused */
  size?: number;
  /** kept for API compatibility, unused */
  slug?: string;
}

export const TitleImage = ({
  src,
  className,
  imgClassName,
}: TitleImageProps) => {
  return (
    <div className={className}>
      {src ? (
        <img alt="" className={imgClassName} loading="lazy" src={src} />
      ) : null}
    </div>
  );
};
