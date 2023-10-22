import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { AppDiv } from "./Layout";
import toast, { Toaster } from "react-hot-toast";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import { useEffect, useState } from "react";
import { getApi } from "./api";

const perPage = 12;

export default function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function onSearchSubmit(e) {
    e.preventDefault();
    const newSearch = e.target.search.value.trim().toLowerCase();

    setSearch(newSearch);
    setPage(1);
    setGalleryItems([]);
  }

  function onLoadMoreClick() {
    setPage((prevState) => prevState + 1);
  }

  useEffect(() => {
    if (search === "") {
      return;
    }
    async function searchPhotos() {
      try {
        setLoading(true);
        setError(false);
        const getPhotos = await getApi(search, page, perPage);
        if (page < 2) {
          toast.success(`Hooray! We found ${getPhotos.totalHits} images!`);
        }

        const photos = getPhotos.hits;

        setGalleryItems((prevState) => [...prevState, ...photos]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    searchPhotos();
  }, [search, page]);

  return (
    <AppDiv>
      <SearchBar onSubmit={onSearchSubmit} />
      {galleryItems.length > 0 && <ImageGallery photos={galleryItems} />}
      {galleryItems.length > 1 && <Button onClick={onLoadMoreClick} />}
      {loading && <Loader />}
      {error && toast.error("Oops, something went wrong! Reload this page!")}
      <Toaster position="top-right" />
    </AppDiv>
  );
}
