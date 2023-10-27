import { MagnifyingGlass } from "phosphor-react";
import { SearchFormButton, SearchFormContainer, SearchFormInput } from "./style";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { 
    register, 
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransictions(data: SearchFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  }


  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransictions)}>
      <SearchFormInput 
        type="text"  
        placeholder="Busque por transações"
        {...register('query')} />
      <SearchFormButton type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} weight="bold" />
        <span>Buscar</span>
      </SearchFormButton>
    </SearchFormContainer>
  )
}