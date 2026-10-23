import WakppopPage from "@/components/WakppopPage";
import { wakppopMetadata } from "@/lib/wakppop";
export const metadata = wakppopMetadata("ko");
export default function Page() { return <WakppopPage locale="ko" />; }
