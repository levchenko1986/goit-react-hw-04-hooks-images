import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import MyLoader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import ImageError from "./components/ImageError";
import getImages from "./services/getImages";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    const fetchImages = async () => {
      try {
        const data = await getImages(page, query);
        setImages((images) => [...images, ...data]);
        if (page !== 1) {
          scrollWindow();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [page, query]);

  const loadMore = () => {
    setLoading(!loading);
    setPage((prev) => prev + 1);
    setLoading(loading);
  };

  const scrollWindow = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const searchImages = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const loadMoreImages = images.length > 0 && images.length >= 12;
  const imagesListEmpty = query !== "";

  return (
    <div className="App">
      <Searchbar onSubmit={searchImages} />
      {images.length > 0 ? (
        <ImageGallery images={images} />
      ) : (
        imagesListEmpty && <ImageError message={query} />
      )}
      {loadMoreImages && <Button onLoadMore={loadMore} />}
      {loading && <MyLoader />}
    </div>
  );
};

export default App;
