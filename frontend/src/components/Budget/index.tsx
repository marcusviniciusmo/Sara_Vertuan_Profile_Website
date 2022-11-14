import { useEffect, useState } from "react";
import { useGlobalContext } from "context";
import { BudgetProps } from "types/Budget";
import { MockedData } from "mocks/Budget";
import { ContactCardContainer, ContactCardContent } from "styles/ContactCard";
import { Strong, Button } from './styles';

export function Budget() {
  const [mockedData, setMockeData] = useState<BudgetProps>();

  const { language, theme } = useGlobalContext();

  const urlBudget = '#';

  useEffect(() => {
    setMockeData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <ContactCardContainer theme={theme}>
      <ContactCardContent theme={theme}>
        <Strong>{mockedData?.text}</Strong>

        <Button href={urlBudget} target='_blank'>
          {mockedData?.textButton}
        </Button>
      </ContactCardContent>
    </ContactCardContainer>
  );
};