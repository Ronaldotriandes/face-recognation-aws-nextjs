'use client'
import Webcam from "react-webcam";
import React, {useState, useRef, useCallback} from "react";
export const WebcamCapture = () => {
    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);
  
    const capture = useCallback(() => {
      const imageSrc :string | null  = webcamRef?.current?.getScreenshot() || null;
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <button onClick={capture}>Capture photo</button>
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
      </>
    );
  };