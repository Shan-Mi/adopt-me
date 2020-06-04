import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0, // active index, the active one
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"]; //default images

    if (media.length) {
      photos = media.map(({ large }) => large);
      //now photos are an array of strings of URLs
    }

    return { photos };
  }

  handleIndexClick = (event) => {
    this.setState({ active: +event.target.dataset.index });
  };
  // or we can use this.handleIndexClick = this.handleIndexClick.bind(this) inside of the constructor's class to make sure this keyword points to the constructor itself.

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
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
