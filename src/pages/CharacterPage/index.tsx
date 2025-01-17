import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaCarAlt, FaSpaceShuttle } from 'react-icons/fa';
import { MdMovie } from 'react-icons/md';
import { useCharacter } from '../../hooks/useCharacter';
import { api } from '../../services/api';
import type { Character } from '../../types/Character.type';
import { CharacterContainer, Container } from './styles';
import { Loading } from '../../components/Loading';

export default function CharacterPage() {
  const [data, setData] = useState<Character>();
  const {
    films,
    homeWorld,
    starships,
    vehicles,
    isLoading: isLoadingCharacter,
  } = useCharacter(data);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  const getCharacterData = useCallback(async () => {
    try {
      const response = await api.get(`/people/${id}`);
      setData(response.data);
    } catch { /* empty */ } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getCharacterData();
  }, [getCharacterData]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <CharacterContainer>
          <div className="character-data">
            <div className="character-data-details">
              <h1>{data?.name}</h1>
              <p>
                Planeta natal:
                {' '}
                <span>{homeWorld.name}</span>
              </p>

              <p>
                Data de nascimento:
                {' '}
                <span>{data?.birth_year}</span>
              </p>

              <p>
                Gênero:
                {' '}
                <span>{data?.gender}</span>
              </p>

              <p>
                Altura:
                {' '}
                <span>
                  {data?.height}
                  {' '}
                  cm
                </span>
              </p>

              <p>
                Peso:
                {' '}
                <span>
                  {data?.mass}
                  {' '}
                  kg
                </span>
              </p>

              <p>
                Cor da pele:
                {' '}
                <span>{data?.skin_color}</span>
              </p>

              <p>
                Cor dos olhos:
                {' '}
                <span>{data?.eye_color}</span>
              </p>

              <p>
                Cor do cabelo:
                {' '}
                <span>{data?.hair_color}</span>
              </p>
            </div>

            <div className="character-data-others">
              {isLoadingCharacter ? (
                <Loading />
              ) : (
                <>
                  <div className="character-data-others-data">
                    <h2>Naves</h2>

                    {starships.length > 0 ? (
                      <ul>
                        {starships.map((starship) => (
                          <li key={starship.name}>
                              <FaSpaceShuttle />
                              {starship.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span>Não há.</span>
                    )}
                  </div>

                  <div className="character-data-others-data">
                    <h2>Veículos</h2>
                    {vehicles.length > 0 ? (
                      <ul>
                        {vehicles.map((vehicle) => (
                          <li key={vehicle.name}>
                              <FaCarAlt />
                              {vehicle.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span>Não há.</span>
                    )}
                  </div>

                  <div className="character-data-others-data">
                    <h2>Filmes</h2>
                    <ul>
                      {films.map((film) => (
                        <li key={film.title}>
                            <MdMovie />
                            {film.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="character-image">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt={`Imagem de ${data?.name}`}
            />
          </div>
        </CharacterContainer>
      )}
    </Container>
  );
}