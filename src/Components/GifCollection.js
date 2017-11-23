import React from "react";
import Gif from "./Gif";
import { GridList } from "material-ui/GridList";

const pStyles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: "auto"
  }
};

const hStyles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto"
  },
  titleStyle: {
    color: "rgb(0, 188, 212)"
  }
};

const GifCollection = ({ gifs, handleGif, action }) => {
  const renderGifs = (gif, id) => (
    <Gif key={id} attr={gif} type={action} handleGif={handleGif} />
  );

  const renderHorrizontalDisplay = () => (
    <div style={hStyles.root}>
      <GridList style={hStyles.gridList} cols={0.5}>
        {gifs.map(renderGifs)}
      </GridList>
    </div>
  );

  const renderPerpendicularDisplay = () => (
    <div style={pStyles.root}>
      <GridList cellHeight={180} style={pStyles.gridList}>
        {gifs.map(renderGifs)}
      </GridList>
    </div>
  );

  return (
    <div>
      {action === "perpendicular"
        ? renderPerpendicularDisplay()
        : renderHorrizontalDisplay()}
    </div>
  );
};

export default GifCollection;
