// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      light: string;

      placeholderColor: string;

      backgroundColor: string;

      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;
      gray8: string;
      gray9: string;
    };
  }
}
