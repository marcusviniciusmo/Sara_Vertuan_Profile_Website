import * as Dialog from '@radix-ui/react-dialog';

export function Synopsis() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay />

      <Dialog.Content>
        <Dialog.Close />
        <h1>MODAL</h1>
      </Dialog.Content>
    </Dialog.Portal>
  );
};