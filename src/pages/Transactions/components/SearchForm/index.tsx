import { MagnifyingGlass } from "phosphor-react";
import { SearchFormButton, SearchFormContainer, SearchFormInput } from "./style";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormInput placeholder="Busque por transações"/>
      <SearchFormButton type="submit">
        <MagnifyingGlass size={20} weight="bold"/>
        <span>Buscar</span>
      </SearchFormButton>
    </SearchFormContainer>
  )
}