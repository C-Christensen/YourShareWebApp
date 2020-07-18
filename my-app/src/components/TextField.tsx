import * as React from 'react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';

const stackTokens = { childrenGap: 50 };

interface TextField{
    label: string,
    placeholder: string;
    user?:string
}

const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};



const TextFieldBasicExample = (props: TextField) => {

    
    
    return (
      <Stack horizontal tokens={stackTokens} styles={stackStyles}>
        <Stack {...columnProps}>
          <TextField name={props.user} label={props.label} placeholder={props.placeholder}/>
        </Stack>
    </Stack>
  );
};

export default TextFieldBasicExample;