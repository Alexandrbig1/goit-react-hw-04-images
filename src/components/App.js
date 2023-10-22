import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { AppDiv } from "./Layout";
import toast, { Toaster } from "react-hot-toast";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import { Component } from "react";
import { getApi } from "./api";

const perPage = 12;

export class App extends Component {
  state = {
    search: "",
    page: 1,
    galleryItems: [],
    loading: false,
    error: false,
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    const newSearch = e.target.search.value.trim().toLowerCase();

    this.setState({ search: newSearch, page: 1, galleryItems: [] });
  };

  onLoadMoreClick = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true, error: false });
        const getPhotos = await getApi(
          this.state.search,
          this.state.page,
          perPage
        );
        if (this.state.page < 2) {
          toast.success(`Hooray! We found ${getPhotos.totalHits} images!`);
        }

        const photos = getPhotos.hits;

        this.setState((prevState) => ({
          galleryItems: [...prevState.galleryItems, ...photos],
        }));
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { galleryItems, loading, error } = this.state;

    return (
      <AppDiv>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.galleryItems.length > 0 && (
          <ImageGallery photos={galleryItems} />
        )}
        {galleryItems.length > 1 && <Button onClick={this.onLoadMoreClick} />}
        {loading && <Loader />}
        {error && toast.error("Oops, something went wrong! Reload this page!")}
        <Toaster position="top-right" />
      </AppDiv>
    );
  }
}
