import React from "react";
import { render } from "test-utils";

import AppRoutes from "./index";

test('renders component of routes', () => {
  render(<AppRoutes></AppRoutes>)
});
