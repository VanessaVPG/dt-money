import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useState } from 'react';

export function NewTransactionModal() {
  const [isActive, setIsActive] = useState(false);
  function handleActiveButton() {
    setIsActive(!isActive);
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>
          Nova transação
        </Dialog.Title>
        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>
        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />
          <TransactionType>
            <TransactionTypeButton value='income' onClick={handleActiveButton} variant="income">
              <ArrowCircleUp size={24} />
              <span>Entrada</span>
            </TransactionTypeButton>
            <TransactionTypeButton value='outcome' onClick={handleActiveButton} variant='outcome'>
              <ArrowCircleDown size={24} />
              <span>Saída</span>
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}