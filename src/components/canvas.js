import React, { useContext, useEffect } from "react";
import { WebSocketContext } from "../contexts/WebSocketContext";
import './canvas.scss';

const Canvas = () => {
  const { subscribe } = useContext(WebSocketContext);
  const canvasRef = React.createRef();

  useEffect(() => {
    const subscription = subscribe({
      next: (message) => {
        console.log(message);
        // setMessages(messages => [...messages, message]);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [subscribe]);

  useEffect(() => {
    const { current: canvas } = canvasRef;

    // const dpr = window.devicePixelRatio || 1;
    // // Get the size of the canvas in CSS pixels.
    // const rect = canvas.getBoundingClientRect();
    // // Give the canvas pixel dimensions of their CSS
    // // size * the device pixel ratio.
    // canvas.width = rect.width * dpr;
    // canvas.height = rect.height * dpr;

    // // get 2d context to draw on (the "bitmap" mentioned earlier)
    // const ctx = canvas.getContext("2d");
    // ctx.scale(dpr, dpr);

    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    // // ------------------------------------------------------------------------

    // cars.forEach(({ id, location, rotation }) => {
    //   const { image } = images.find(image => image.id === id);
    //   const [x, y] = location;
    //   console.log(`Car ${id} at [${x}, ${y}]`);

    //   drawImageRotated(image, x, y, 0.5, rotation);
    // });

    // function drawImageRotated(img, x, y, scale, rot) {
    //   ctx.setTransform(scale, 0, 0, scale, x, y);
    //   ctx.rotate(rot);
    //   ctx.drawImage(img, -img.width / 2, -img.height / 2);
    //   ctx.setTransform(1, 0, 0, 1, 0, 0);
    // }
  }, [canvasRef]);

  return <canvas className="canvas" ref={canvasRef} />;
};

export default Canvas;