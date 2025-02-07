/**
 * TODO: Update this component to use your client-side framework's link
 * component. We've provided examples of how to do this for Next.js, Remix, and
 * Inertia.js in the Catalyst documentation:
 *
 * https://catalyst.tailwindui.com/docs#client-side-router-integration
 */

import * as Headless from '@headlessui/react';
import React, { forwardRef } from 'react';

export const Link = forwardRef(function Link(props, ref) {
  // Destructure children from props to ensure content is provided
  const { children, ...rest } = props;

  return (
    <Headless.DataInteractive>
      <a {...rest} ref={ref}>
        {children || 'Link'}
      </a>
    </Headless.DataInteractive>
  );
});