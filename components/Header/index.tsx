import React, { useEffect, useState, useCallback } from "react";

import * as Styled from "./index.styled";

export interface FormEvent extends HTMLFormControlsCollection {
  filter: {
    value: string;
  };
}

export default function Header(props) {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    let target = ((e.target as HTMLFormElement).elements as FormEvent).filter
      .value;
    props.setFilter(target);
  }, []);

  return (
    <Styled.Header>
      <h1>Flickr Photo Feed</h1>
      <Styled.Searchbox onSubmit={onSubmit}>
        <input data-testid="search" type="search" name="filter" />
        <button data-testid="submit" type="submit"> Search </button>
      </Styled.Searchbox>
    </Styled.Header>
  );
}
