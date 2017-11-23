import React from "react";
import { GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";

const Gif = ({ type, attr, action, handleGif }) => {
  const { url } = attr.images.original;
  let value;
  type === "perpendicular"
    ? (value = "Add Favorite --->")
    : (value = "Remove Favorite --->");

  const performDealFavorite = () => handleGif(attr);

  return (
    <GridTile
      key={url}
      title={value}
      actionIcon={
        <IconButton onClick={performDealFavorite}>
          <StarBorder color="white" />
        </IconButton>
      }
    >
      <img src={url} alt="" />
    </GridTile>
  );
};

export default Gif;
