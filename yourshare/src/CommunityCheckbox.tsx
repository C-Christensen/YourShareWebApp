import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react';
import { Stack } from 'office-ui-fabric-react';



// Initialize icons in case this example uses them


// Used to add spacing between example checkboxes
const stackTokens = { childrenGap: 10 };

export const CheckboxBasicExample: React.FunctionComponent = () => {
  // These checkboxes are uncontrolled because they don't set the `checked` prop.
  return (
    <Stack tokens={stackTokens}>
      <Checkbox label="Unchecked checkbox (uncontrolled)"  />

      <Checkbox label="Checked checkbox (uncontrolled)" />

    </Stack>
  );
};

function _onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
  console.log(`The option has been changed to ${isChecked}.`);
}

export default CheckboxBasicExample

