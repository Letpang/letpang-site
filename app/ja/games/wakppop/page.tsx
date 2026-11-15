import WakppopPage from "@/components/WakppopPage";
import { wakppopMetadata } from "@/lib/wakppop";
export const metadata = wakppopMetadata("ja");
export default function Page() { return <WakppopPage locale="ja" />; }
