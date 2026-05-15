import { SiteChrome } from "./SiteChrome";
import { ExperienceView } from "./ExperienceView";

export function ExperiencePage({ pathname }: { pathname: string }) {
  return (
    <SiteChrome pathname={pathname}>
      <ExperienceView />
    </SiteChrome>
  );
}
