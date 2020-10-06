import React, { useState } from "react";

import { MdKeyboardArrowRight, MdSearch } from "react-icons/md";

import { Container, Input, Button } from "./styles";

export default function SearchBar({ placeholder, onSubmit }) {
  const [value, setValue] = useState("");

  return (
    <Container
      onSubmit={e => {
        e.preventDefault();
        if (value === "") return;
        onSubmit(value);
        setValue("");
      }}
    >
      <MdSearch size={20} fill="#333" />

      <Input
        placeholder={placeholder}
        value={value}
        onChange={event => setValue(event.target.value)}
      />

      <Button type="submit">
        <MdKeyboardArrowRight size={20} fill="#333" />
      </Button>
    </Container>
  );
}
