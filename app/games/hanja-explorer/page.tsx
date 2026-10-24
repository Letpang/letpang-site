import HanjaPopPage from "@/components/HanjaPopPage";
import { hanjaMetadata } from "@/lib/hanjapop";
export const metadata = hanjaMetadata("ko");
export default function Page() { return <HanjaPopPage locale="ko" />; }
