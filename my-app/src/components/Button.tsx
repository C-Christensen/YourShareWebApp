import * as React from 'react';
import { pages } from "../App";
import { PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';

// export interface IButtonExampleProps {
//     // These are set based on the toggles shown above the examples (not needed in real code)
//     disabled?: boolean;
//     checked?: boolean;
//   }

interface Button {
    text: string,
    navigation: (page: pages) => void,
    page: pages
    className:string
    

}

  const stackTokens: IStackTokens = { childrenGap: 40 };

  export const ButtonDefaultExample = (props: Button) => {
  
    return (
      <Stack horizontal tokens={stackTokens}>
        <PrimaryButton className={props.className}  onClick={(e) => {props.navigation(props.page)}}>{props.text}</PrimaryButton>
      </Stack>
    );
}

export default ButtonDefaultExample;
