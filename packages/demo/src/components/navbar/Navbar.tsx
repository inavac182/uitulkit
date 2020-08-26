import * as React from 'react';

import { UiTulkitList, UiTulkitListItem } from '@uitulkit/list';
import { UiTulkitLink } from '@uitulkit/text';

export const Navbar = () => {
  return (
    <UiTulkitList>
      <UiTulkitListItem>
        <UiTulkitLink to="/" external={true}>
          Home - (Full reload)
        </UiTulkitLink>
      </UiTulkitListItem>
      <UiTulkitListItem>
        <UiTulkitLink to="/buttons/">Buttons</UiTulkitLink>
      </UiTulkitListItem>
      <UiTulkitListItem>
        <UiTulkitLink to="/cards/">Cards</UiTulkitLink>
      </UiTulkitListItem>
      <UiTulkitListItem>
        <UiTulkitLink to="/grids/">Grids</UiTulkitLink>
      </UiTulkitListItem>
    </UiTulkitList>
  );
};
