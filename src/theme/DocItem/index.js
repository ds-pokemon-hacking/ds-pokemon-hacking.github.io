import React from 'react';
import {HtmlClassNameProvider} from '@docusaurus/theme-common';
import {DocProvider} from '@docusaurus/plugin-content-docs/client';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
import PageNavigator from '@site/src/components/PageNavigator'; // Page navigator with back button & contents dropdown
import { useReturnToTopHover } from "@site/src/hooks/useReturnToTopHover"; 

export default function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  const MDXComponent = props.content;

  // Inject return-to-top hover icons on headings
  useReturnToTopHover();

  
  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          {}
          <PageNavigator />

          {}
          <MDXComponent />
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
