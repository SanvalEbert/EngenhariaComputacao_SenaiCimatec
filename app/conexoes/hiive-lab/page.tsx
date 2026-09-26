import EditorialPage from "@/components/EditorialPage";
import { hiiveLab } from "@/data/content";

export default function HiiveLabPage() {
  return <EditorialPage item={hiiveLab} backHref="/#conexoes" backLabel="Voltar às conexões" />;
}
