import { SiteChrome } from "./SiteChrome";
import { HomeView } from "./HomeView";

export function HomePage({ pathname }: { pathname: string }) {
  return (
    <SiteChrome pathname={pathname}>
      <HomeView />
    </SiteChrome>
  );
}
