import { SiteChrome } from "./SiteChrome";
import { WorkView } from "./WorkView";

export function WorkPage({ pathname }: { pathname: string }) {
  return (
    <SiteChrome pathname={pathname}>
      <WorkView />
    </SiteChrome>
  );
}
