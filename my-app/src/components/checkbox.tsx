import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { Stack } from 'office-ui-fabric-react/lib/Stack';


const stackTokens = { childrenGap: 10 };

interface Checkbox{
    label?: string,
    className?: string
}

const CheckboxBasicExample = (props: Checkbox) => {
  // These checkboxes are uncontrolled because they don't set the `checked` prop.
  return (
    <Stack tokens={stackTokens}>
      <Checkbox className={props.className} label={props.label} />
    </Stack>
  );
};

export default CheckboxBasicExample;