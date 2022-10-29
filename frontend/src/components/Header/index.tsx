import { useGlobalContext } from "context";
import { Language } from "components/Language"
import { Theme } from "components/Theme";
import { LayoutHeader } from "./styles";

export function Header() {
  const { theme } = useGlobalContext();

  return (
    <LayoutHeader theme={theme}>
      <Language />

      <Theme />
    </LayoutHeader>
  );
};