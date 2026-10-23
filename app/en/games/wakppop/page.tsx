import WakppopPage from "@/components/WakppopPage";
import { wakppopMetadata } from "@/lib/wakppop";
export const metadata = wakppopMetadata("en");
export default function Page() { return <WakppopPage locale="en" />; }
