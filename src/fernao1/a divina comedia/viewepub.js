import React, { useRef, useState, useEffect, useCallback } from "react";

import { ReactReader, ReactReaderStyle, EpubView } from "react-reader";
import Ebook from "../helena/helena.epub";

const ownStyles = {
  ...ReactReaderStyle,
  arrow: {
    ...ReactReaderStyle.arrow,
    color: "red"
  }
};

const loc = "epubcfi(/6/4[chapter1]!/4/2[chapter1]/8[s3]/6/1:0)";

function Appview1() {
  const [selections, setSelections] = useState([]);
  const renditionRef = useRef(null);
  const [percent, setPercent] = useState(0);

  const handleLocationChanged = useCallback(
    (epubcifi) => {
      const percent = ((epubcifi.start / epubcifi.total) * 100).toFixed(1);
      setPercent(percent);
    },
    [setPercent]
  );

  useEffect(() => {
    if (renditionRef.current) {
      function setRenderSelection(cfiRange, contents) {
        setSelections(
          selections.concat({
            text: renditionRef.current.getRange(cfiRange).toString(),
            cfiRange
          })
        );
        renditionRef.current.annotations.add(
          "highlight",
          cfiRange,
          {},
          null,
          "hl",
          {
            fill: "yellow",
            "fill-opacity": "0.5"
          }
        );
        contents.window.getSelection().removeAllRanges();
      }
      renditionRef.current.on("selected", setRenderSelection);
      console.log(selections);
      return () => {
        renditionRef.current.off("selected", setRenderSelection);
      };
    }
  }, [setSelections, selections]);
  return (
    <>
      <div className="App" style={{ position: "relative", height: "100vh" }}>
        <ReactReader
          
         
          locationChanged={handleLocationChanged}
          url={Ebook}
          styles={ownStyles}
          getRendition={(rendition) => {
            renditionRef.current = rendition;
            renditionRef.current.themes.default({
              "::selection": {
                background: "yellow"
              }
            });
            setSelections([]);
          }}
          
        />
          
         
          
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          zIndex: 1,
          backgroundColor: "white"
        }}
      >
       
        <ul>
          {selections.map(({ text, cfiRange }, i) => (
            <li key={i}>
              {text}{" "}
              <button
                onClick={() => {
                  renditionRef.current.display(cfiRange);
                }}
              >
                Show
              </button>
              <button
                onClick={() => {
                  renditionRef.current.annotations.remove(
                    cfiRange,
                    "highlight"
                  );
                  setSelections(selections.filter((item, j) => j !== i));
                }}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Appview1


