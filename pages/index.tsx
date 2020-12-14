import React, { useEffect, useState } from "react";
import { v4 } from 'uuid';

import * as Styled from "./index.styled";
import Header from '../components/Header'

export default function Home () {
  const [photos, setPhotos] = useState([]);
  const [filter, setFilter] = useState("");

  
  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch(`/api/flickr?q=${filter}`);
      const data = await response.json();
      setPhotos(data.photos);
    }
    fetchPhotos();
  }, [filter]);

  const components = photos?.map((photo) => {
    return <a data-testid="photo" key={v4()} href={photo.link}>{<img src={photo?.media?.m} />}</a>
  });

  return (
    <Styled.Container>
      <Header setFilter={setFilter} />
      <Styled.Main>{components}</Styled.Main>
    </Styled.Container>
  );
}
