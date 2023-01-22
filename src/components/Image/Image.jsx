import useImage from "../../hooks/use-image";

function Image({ fileName, alt }) {
  const { isLoading, error, image } = useImage(fileName);

  if (error) return alt;

  return isLoading ? "Loading..." : <img src={image} alt={alt} />;
}

export default Image;
