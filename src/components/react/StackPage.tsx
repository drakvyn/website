import { SiteChrome } from "./SiteChrome";
import { StackView } from "./StackView";

export function StackPage({ pathname }: { pathname: string }) {
  return (
    <SiteChrome pathname={pathname}>
      <StackView />
    </SiteChrome>
  );
}
