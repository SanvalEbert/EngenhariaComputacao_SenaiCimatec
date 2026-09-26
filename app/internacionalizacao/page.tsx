import EditorialPage from "@/components/EditorialPage";
import { internationalization } from "@/data/content";

export default function InternationalizationPage() {
  return <EditorialPage item={internationalization} backHref="/#conexoes" backLabel="Voltar às conexões" />;
}
