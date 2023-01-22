import { useState, useEffect } from "react";

function useImage(fileName) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../assets/images/${fileName}`);
        setImage(response.default);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [fileName]);

  return { isLoading, error, image };
}

export default useImage;
