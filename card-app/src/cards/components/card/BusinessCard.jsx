import { Card, CardActionArea } from "@mui/material";

import React from "react";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import cardType from "../../models/cardType";
import { func } from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { makeFirstLetterCapital } from "../../../forms/utils/algoMethods";

export default function BusinessCard1({
  card,
  handleDelete,
  onLike,
  handleEdit,
}) {
  const navigate = useNavigate();
  return (
    <>
      <Card sx={{ width: 250, m: 2 }}>
        <CardActionArea
          onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)}
        >
          <CardHead image={card.image} />
          <CardBody
            title={makeFirstLetterCapital(card.title)}
            subtitle={card.subtitle}
            phone={card.phone}
            address={card.address}
            cardNumber={card.bizNumber}
          />
        </CardActionArea>
        <CardActionBar
          id={card._id}
          user_id={card.user_id}
          handleDelete={handleDelete}
          onLike={onLike}
          handleEdit={handleEdit}
          cardLikes={card.likes}
        />
      </Card>
    </>
  );
}

BusinessCard1.propTypes = {
  card: cardType,
  handleDelete: func,
  onLike: func,
  handleEdit: func,
};
