import React from "react";
import { Photo } from "@frontendmasters/pet";

interface IProps {
  media: Photo[];
}

interface IState {
  active: number;
  photos: string[];
}

class Carousel extends React.Component<IProps, IState> {
  public state = {
    photos: [],
    active: 0, // active index, the active one
  };

  public static getDerivedStateFromProps({ media }: IProps) {
    let photos = ["http://placecorgi.com/600/600"]; //default images

    if (media.length) {
      photos = media.map(({ large }) => large);
      // now photos are an array of strings of URLs
    }
    return { photos };
  }

  public handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.target.dataset.index) {
      this.setState({ active: +event.target.dataset.index });
    }
  };
  // or we can use this.handleIndexClick = this.handleIndexClick.bind(this) inside of the constructor's class to make sure this keyword points to the constructor itself.

  public render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
