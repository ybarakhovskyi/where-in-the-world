import { MAIN_PAGE_TITLE } from '@/core/consts';
import { HomeLayout } from '@/components/pages/home';

export default function Home() {
  return (
    <HomeLayout>
      <h1>{MAIN_PAGE_TITLE}</h1>
    </HomeLayout>
  );
}
