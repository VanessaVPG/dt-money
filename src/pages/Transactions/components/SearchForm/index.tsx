import { MagnifyingGlass } from "phosphor-react";
import { SearchFormButton, SearchFormContainer, SearchFormInput } from "./style";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";


const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )


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
    await fetchTransactions(data.query);
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