// mostly code from reactjs.org/docs/error-boundaries.html

import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught en error", error, info);
  }

  // componentDidMount: set things up, integrate with other libraries, what you run when you first start
  // componentDidUpdate: use but not so much,
  // componentWillAmout: setInterval, if you have to clean up anything, this will allow you to clean up things before the component leaves the DOM.
  // componentDidUpdate: it will run every time when it gets new state or new props
  
  //componentWillUpdate componentDidUpdate both will work
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
      // or we can write "()=> navigate('/'), 5000"
      // this navigate comes from reach router as well.
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
