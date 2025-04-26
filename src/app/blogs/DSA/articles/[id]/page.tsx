'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { WithNavbarAndSidebar } from '@/components/customUI/hook';
import { Pages } from '@/lib/Constants/PagesConstants';
import Loading from '@/components/customUI/BlogLoading';

export default function SingleArticle() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const slug = window.location.href.split('/blogs/')[1]?.split('?')[0].split('#')[0];
      if (!slug) return;
      const DynamicComponent = dynamic(() => import(`@/lib/Files/${slug}`), {
        ssr: false,
        loading: () => <Loading />,
      });
      setComponent(DynamicComponent); // ✅ now safe
    }
  }, []);

  return (
    <WithNavbarAndSidebar currentPage={Pages.Blogs}>
      {Component ? (
        <Component />
      ) : (
        <Loading />
      )}
    </WithNavbarAndSidebar>
  );
}
