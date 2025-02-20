import { TermsOfServiceTemplate } from "components/templates";
import { TERMS_OF_SERVICE_TITLE } from "constants/TermsOfServicePageConstants";
import { useEffect } from "react";
import { useTopBarStore } from "stores";

const TermsOfServicePage = () => {
  const { clear, setTitle } = useTopBarStore();
  useEffect(() => {
    clear();
    setTitle(TERMS_OF_SERVICE_TITLE);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <TermsOfServiceTemplate />;
};

export default TermsOfServicePage;
