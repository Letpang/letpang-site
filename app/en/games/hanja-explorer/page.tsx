import HanjaPopPage from "@/components/HanjaPopPage";
import { hanjaMetadata } from "@/lib/hanjapop";
export const metadata = hanjaMetadata("en");
export default function Page() { return <HanjaPopPage locale="en" />; }
