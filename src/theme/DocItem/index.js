import React from 'react';
import {HtmlClassNameProvider} from '@docusaurus/theme-common';
import {DocProvider} from '@docusaurus/plugin-content-docs/client';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
import PageNavigator from '@site/src/components/PageNavigator'; // Page navigator with back button & contents dropdown
import ReturnToTopButton from "@site/src/components/ReturnToTopButton"; //return to top button that appears in bottom right after scrolling

export default function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  const MDXComponent = props.content;

  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          <PageNavigator />
          <MDXComponent />
          <ReturnToTopButton />
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
