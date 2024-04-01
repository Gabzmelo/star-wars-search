import React, { useState } from 'react';
import { MdStarBorder, MdStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setFavouriteCharacter,
  removeFavouriteCharacter,
} from '../../store/slices/Character.slice';
import { Container } from './styles';

interface ICardProps {
  imageUrl: string;
  name: string;
  id: string;
  type: 'characters';
  isFavourited: boolean;
}

export function Card({
  type,
  imageUrl,
  name,
  id,
  isFavourited = false,
}: ICardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(isFavourited);
  const dispatch = useDispatch();

  function handleFavourite() {
    if (isFavourited === false) {
      if (type === 'characters') {
        dispatch(setFavouriteCharacter({ name, id }));
      }
    } else {
      if (type === 'characters') {
        dispatch(removeFavouriteCharacter({ name, id }));
      }
    }
    setIsFavorite(!isFavourited);
  }

  return (
    <Container>
      <button type="button" onClick={() => handleFavourite()}>
        {!isFavorite ? <MdStarBorder size={30} /> : <MdStar size={30} />}
      </button>

      <img src={imageUrl} alt={`Imagem de ${name}`} />

      <div className="card-name">
        <Link to={`/${type}/${id}`}>
          <span>{name}</span>
        </Link>
      </div>
    </Container>
  );
}