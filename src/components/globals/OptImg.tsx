export const OptImg = ({
  src,
  file,
  alt,
}: {
  src: string;
  file: string;
  alt: string;
}) => {
  const RELATIVE_PATH = "";

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${RELATIVE_PATH}${src}/${file}.avif`}
      />
      <source
        type="image/webp"
        srcSet={`${RELATIVE_PATH}${src}/${file}.webp`}
      />
      <img src={`${RELATIVE_PATH}${src}/${file}.jpg`} alt={alt} />
    </picture>
  );
};
