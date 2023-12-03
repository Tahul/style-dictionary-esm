/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["file options registered file header should match snapshot"] = 
`/**
 * hello
 * Do not edit directly
 * Generated on Sat, 01 Jan 2000 00:00:00 GMT
 */

:root {
  --color-red: #ff0000;
}
`;
/* end snapshot file options registered file header should match snapshot */

snapshots["file options config file header should match snapshot"] = 
`/**
 * Do not edit directly
 * Generated on Sat, 01 Jan 2000 00:00:00 GMT
 * hello, world!
 */

:root {
  --color-red: #ff0000;
}
`;
/* end snapshot file options config file header should match snapshot */

snapshots["file options inline file header should match snapshot"] = 
`/**
 * build version 1.0.0
 */

:root {
  --color-red: #ff0000;
}
`;
/* end snapshot file options inline file header should match snapshot */

snapshots["platform options no file options should match snapshot"] = 
`/**
 * Do not edit directly
 * Generated on Sat, 01 Jan 2000 00:00:00 GMT
 * hello, world!
 */

module.exports = {
  "color": {
    "red": {
      "value": "#ff0000",
      "original": {
        "value": "#ff0000"
      },
      "name": "ColorRed",
      "attributes": {
        "category": "color",
        "type": "red"
      },
      "path": [
        "color",
        "red"
      ]
    }
  }
};
`;
/* end snapshot platform options no file options should match snapshot */

snapshots["platform options showFileHeader should match snapshot"] = 
`module.exports = {
  "color": {
    "red": {
      "value": "#ff0000",
      "original": {
        "value": "#ff0000"
      },
      "name": "ColorRed",
      "attributes": {
        "category": "color",
        "type": "red"
      },
      "path": [
        "color",
        "red"
      ]
    }
  }
};
`;
/* end snapshot platform options showFileHeader should match snapshot */

snapshots["platform options file header override should match snapshot"] = 
`/**
 * Header overridden
 */

module.exports = {
  "color": {
    "red": {
      "value": "#ff0000",
      "original": {
        "value": "#ff0000"
      },
      "name": "ColorRed",
      "attributes": {
        "category": "color",
        "type": "red"
      },
      "path": [
        "color",
        "red"
      ]
    }
  }
};
`;
/* end snapshot platform options file header override should match snapshot */

snapshots["css/variables should match snapshot"] = 
`/**
 * Do not edit directly
 * Generated on Sat, 01 Jan 2000 00:00:00 GMT
 */

:root {
  --breakpoint-xs: 304px;
  --breakpoint-sm: 768px;
  --breakpoint-md: calc(304px / 768px);
  --color-background-primary: #ffffff;
  --color-background-secondary: #f3f4f4;
  --color-background-tertiary: #dee1e1;
  --color-background-danger: #ffeae9;
  --color-background-warning: #ffede3;
  --color-background-success: #ebf9eb;
  --color-background-info: #e9f8ff;
  --color-background-disabled: #dee1e1;
  --color-border-primary: #c8cccc;
  --color-brand-primary: #0b8599;
  --color-brand-secondary: #6f5ed3;
  --color-core-green-0: #ebf9eb;
  --color-core-green-100: #d7f4d7;
  --color-core-green-200: #c2f2bd;
  --color-core-green-300: #98e58e;
  --color-core-green-400: #75dd66;
  --color-core-green-500: #59cb59;
  --color-core-green-600: #2bb656;
  --color-core-green-700: #0ca750;
  --color-core-green-800: #008b46;
  --color-core-green-900: #006b40;
  --color-core-green-1000: #08422f;
  --color-core-green-1100: #002b20;
  --color-core-teal-0: #e5f9f5;
  --color-core-teal-100: #cdf7ef;
  --color-core-teal-200: #b3f2e6;
  --color-core-teal-300: #7dead5;
  --color-core-teal-400: #24e0c5;
  --color-core-teal-500: #08c4b2;
  --color-core-teal-600: #00a99c;
  --color-core-teal-700: #0b968f;
  --color-core-teal-800: #067c7c;
  --color-core-teal-900: #026661;
  --color-core-teal-1000: #083f3f;
  --color-core-teal-1100: #002528;
  --color-core-aqua-0: #d9fcfb;
  --color-core-aqua-100: #c5f9f9;
  --color-core-aqua-200: #a5f2f2;
  --color-core-aqua-300: #76e5e2;
  --color-core-aqua-400: #33d6e2;
  --color-core-aqua-500: #17b8ce;
  --color-core-aqua-600: #0797ae;
  --color-core-aqua-700: #0b8599;
  --color-core-aqua-800: #0f6e84;
  --color-core-aqua-900: #035e73;
  --color-core-aqua-1000: #083d4f;
  --color-core-aqua-1100: #002838;
  --color-core-blue-0: #e9f8ff;
  --color-core-blue-100: #dcf2ff;
  --color-core-blue-200: #c7e4f9;
  --color-core-blue-300: #a1d2f8;
  --color-core-blue-400: #56adf5;
  --color-core-blue-500: #3896e3;
  --color-core-blue-600: #2b87d3;
  --color-core-blue-700: #2079c3;
  --color-core-blue-800: #116daa;
  --color-core-blue-900: #0c5689;
  --color-core-blue-1000: #0a3960;
  --color-core-blue-1100: #002138;
  --color-core-purple-0: #f2f2f9;
  --color-core-purple-100: #eaeaf9;
  --color-core-purple-200: #d8d7f9;
  --color-core-purple-300: #c1c1f7;
  --color-core-purple-400: #a193f2;
  --color-core-purple-500: #9180f4;
  --color-core-purple-600: #816fea;
  --color-core-purple-700: #6f5ed3;
  --color-core-purple-800: #5e4eba;
  --color-core-purple-900: #483a9c;
  --color-core-purple-1000: #2d246b;
  --color-core-purple-1100: #1d1d38;
  --color-core-magenta-0: #fef0ff;
  --color-core-magenta-100: #f9e3fc;
  --color-core-magenta-200: #f4c4f7;
  --color-core-magenta-300: #edadf2;
  --color-core-magenta-400: #f282f5;
  --color-core-magenta-500: #db61db;
  --color-core-magenta-600: #c44eb9;
  --color-core-magenta-700: #ac44a8;
  --color-core-magenta-800: #8f3896;
  --color-core-magenta-900: #6c2277;
  --color-core-magenta-1000: #451551;
  --color-core-magenta-1100: #29192d;
  --color-core-pink-0: #ffe9f3;
  --color-core-pink-100: #fcdbeb;
  --color-core-pink-200: #ffb5d5;
  --color-core-pink-300: #ff95c1;
  --color-core-pink-400: #ff76ae;
  --color-core-pink-500: #ef588b;
  --color-core-pink-600: #e0447c;
  --color-core-pink-700: #ce3665;
  --color-core-pink-800: #b22f5b;
  --color-core-pink-900: #931847;
  --color-core-pink-1000: #561231;
  --color-core-pink-1100: #2b1721;
  --color-core-red-0: #ffeae9;
  --color-core-red-100: #ffd5d2;
  --color-core-red-200: #ffb8b1;
  --color-core-red-300: #ff9c8f;
  --color-core-red-400: #ff7f6e;
  --color-core-red-500: #f76054;
  --color-core-red-600: #ed4c42;
  --color-core-red-700: #db3e3e;
  --color-core-red-800: #c63434;
  --color-core-red-900: #992222;
  --color-core-red-1000: #6d1313;
  --color-core-red-1100: #2b1111;
  --color-core-orange-0: #ffede3;
  --color-core-orange-100: #fcdccc;
  --color-core-orange-200: #ffc6a4;
  --color-core-orange-300: #ffb180;
  --color-core-orange-400: #ff9c5d;
  --color-core-orange-500: #fc8943;
  --color-core-orange-600: #f57d33;
  --color-core-orange-700: #ed7024;
  --color-core-orange-800: #ce5511;
  --color-core-orange-900: #962c0b;
  --color-core-orange-1000: #601700;
  --color-core-orange-1100: #2d130e;
  --color-core-neutral-0: #ffffff;
  --color-core-neutral-100: #f3f4f4;
  --color-core-neutral-200: #dee1e1;
  --color-core-neutral-300: #c8cccc;
  --color-core-neutral-400: #b0b6b7;
  --color-core-neutral-500: #929a9b;
  --color-core-neutral-600: #6e797a;
  --color-core-neutral-700: #515e5f;
  --color-core-neutral-800: #364141;
  --color-core-neutral-900: #273333;
  --color-core-neutral-1000: #162020;
  --color-core-neutral-1100: #040404;
  --color-core-yellow-0: #fff8e2;
  --color-core-yellow-100: #fdefcd;
  --color-core-yellow-200: #ffe99a;
  --color-core-yellow-300: #ffe16e;
  --color-core-yellow-400: #ffd943;
  --color-core-yellow-500: #ffcd1c;
  --color-core-yellow-600: #ffbc00;
  --color-core-yellow-700: #dd9903;
  --color-core-yellow-800: #ba7506;
  --color-core-yellow-900: #944c0c;
  --color-core-yellow-1000: #542a00;
  --color-core-yellow-1100: #2d1a05;
  --color-font-primary: #040404;
  --color-font-secondary: #273333;
  --color-font-tertiary: #364141;
  --color-font-interactive: #0b8599;
  --color-font-interactive-hover: #0b8599;
  --color-font-interactive-active: #6f5ed3;
  --color-font-interactive-disabled: #364141;
  --color-font-danger: #6d1313;
  --color-font-warning: #601700;
  --color-font-success: #08422f;
  --size-border-radius-large: 30rem;
  --size-font-small: 0.75rem;
  --size-font-medium: 1rem;
  --size-font-large: 1.5rem;
  --size-font-xl: 2.25rem;
  --size-padding-small: 0.5rem;
  --size-padding-medium: 1rem;
  --size-padding-large: 1rem;
  --size-padding-xl: 1rem;
}
`;
/* end snapshot css/variables should match snapshot */

snapshots["css/variables with references should match snapshot"] = 
`/**
 * Do not edit directly
 * Generated on Sat, 01 Jan 2000 00:00:00 GMT
 */

:root {
  --size-padding-xl: 1rem;
  --size-padding-large: 1rem;
  --size-padding-medium: 1rem;
  --size-padding-small: 0.5rem;
  --size-font-xl: 2.25rem;
  --size-font-large: 1.5rem;
  --size-font-medium: 1rem;
  --size-font-small: 0.75rem;
  --size-border-radius-large: 30rem;
  --color-core-yellow-1100: #2d1a05;
  --color-core-yellow-1000: #542a00;
  --color-core-yellow-900: #944c0c;
  --color-core-yellow-800: #ba7506;
  --color-core-yellow-700: #dd9903;
  --color-core-yellow-600: #ffbc00;
  --color-core-yellow-500: #ffcd1c;
  --color-core-yellow-400: #ffd943;
  --color-core-yellow-300: #ffe16e;
  --color-core-yellow-200: #ffe99a;
  --color-core-yellow-100: #fdefcd;
  --color-core-yellow-0: #fff8e2;
  --color-core-neutral-1100: #040404;
  --color-core-neutral-1000: #162020;
  --color-core-neutral-900: #273333;
  --color-core-neutral-800: #364141;
  --color-core-neutral-700: #515e5f;
  --color-core-neutral-600: #6e797a;
  --color-core-neutral-500: #929a9b;
  --color-core-neutral-400: #b0b6b7;
  --color-core-neutral-300: #c8cccc;
  --color-core-neutral-200: #dee1e1;
  --color-core-neutral-100: #f3f4f4;
  --color-core-neutral-0: #ffffff;
  --color-core-orange-1100: #2d130e;
  --color-core-orange-1000: #601700;
  --color-core-orange-900: #962c0b;
  --color-core-orange-800: #ce5511;
  --color-core-orange-700: #ed7024;
  --color-core-orange-600: #f57d33;
  --color-core-orange-500: #fc8943;
  --color-core-orange-400: #ff9c5d;
  --color-core-orange-300: #ffb180;
  --color-core-orange-200: #ffc6a4;
  --color-core-orange-100: #fcdccc;
  --color-core-orange-0: #ffede3;
  --color-core-red-1100: #2b1111;
  --color-core-red-1000: #6d1313;
  --color-core-red-900: #992222;
  --color-core-red-800: #c63434;
  --color-core-red-700: #db3e3e;
  --color-core-red-600: #ed4c42;
  --color-core-red-500: #f76054;
  --color-core-red-400: #ff7f6e;
  --color-core-red-300: #ff9c8f;
  --color-core-red-200: #ffb8b1;
  --color-core-red-100: #ffd5d2;
  --color-core-red-0: #ffeae9;
  --color-core-pink-1100: #2b1721;
  --color-core-pink-1000: #561231;
  --color-core-pink-900: #931847;
  --color-core-pink-800: #b22f5b;
  --color-core-pink-700: #ce3665;
  --color-core-pink-600: #e0447c;
  --color-core-pink-500: #ef588b;
  --color-core-pink-400: #ff76ae;
  --color-core-pink-300: #ff95c1;
  --color-core-pink-200: #ffb5d5;
  --color-core-pink-100: #fcdbeb;
  --color-core-pink-0: #ffe9f3;
  --color-core-magenta-1100: #29192d;
  --color-core-magenta-1000: #451551;
  --color-core-magenta-900: #6c2277;
  --color-core-magenta-800: #8f3896;
  --color-core-magenta-700: #ac44a8;
  --color-core-magenta-600: #c44eb9;
  --color-core-magenta-500: #db61db;
  --color-core-magenta-400: #f282f5;
  --color-core-magenta-300: #edadf2;
  --color-core-magenta-200: #f4c4f7;
  --color-core-magenta-100: #f9e3fc;
  --color-core-magenta-0: #fef0ff;
  --color-core-purple-1100: #1d1d38;
  --color-core-purple-1000: #2d246b;
  --color-core-purple-900: #483a9c;
  --color-core-purple-800: #5e4eba;
  --color-core-purple-700: #6f5ed3;
  --color-core-purple-600: #816fea;
  --color-core-purple-500: #9180f4;
  --color-core-purple-400: #a193f2;
  --color-core-purple-300: #c1c1f7;
  --color-core-purple-200: #d8d7f9;
  --color-core-purple-100: #eaeaf9;
  --color-core-purple-0: #f2f2f9;
  --color-core-blue-1100: #002138;
  --color-core-blue-1000: #0a3960;
  --color-core-blue-900: #0c5689;
  --color-core-blue-800: #116daa;
  --color-core-blue-700: #2079c3;
  --color-core-blue-600: #2b87d3;
  --color-core-blue-500: #3896e3;
  --color-core-blue-400: #56adf5;
  --color-core-blue-300: #a1d2f8;
  --color-core-blue-200: #c7e4f9;
  --color-core-blue-100: #dcf2ff;
  --color-core-blue-0: #e9f8ff;
  --color-core-aqua-1100: #002838;
  --color-core-aqua-1000: #083d4f;
  --color-core-aqua-900: #035e73;
  --color-core-aqua-800: #0f6e84;
  --color-core-aqua-700: #0b8599;
  --color-core-aqua-600: #0797ae;
  --color-core-aqua-500: #17b8ce;
  --color-core-aqua-400: #33d6e2;
  --color-core-aqua-300: #76e5e2;
  --color-core-aqua-200: #a5f2f2;
  --color-core-aqua-100: #c5f9f9;
  --color-core-aqua-0: #d9fcfb;
  --color-core-teal-1100: #002528;
  --color-core-teal-1000: #083f3f;
  --color-core-teal-900: #026661;
  --color-core-teal-800: #067c7c;
  --color-core-teal-700: #0b968f;
  --color-core-teal-600: #00a99c;
  --color-core-teal-500: #08c4b2;
  --color-core-teal-400: #24e0c5;
  --color-core-teal-300: #7dead5;
  --color-core-teal-200: #b3f2e6;
  --color-core-teal-100: #cdf7ef;
  --color-core-teal-0: #e5f9f5;
  --color-core-green-1100: #002b20;
  --color-core-green-1000: #08422f;
  --color-core-green-900: #006b40;
  --color-core-green-800: #008b46;
  --color-core-green-700: #0ca750;
  --color-core-green-600: #2bb656;
  --color-core-green-500: #59cb59;
  --color-core-green-400: #75dd66;
  --color-core-green-300: #98e58e;
  --color-core-green-200: #c2f2bd;
  --color-core-green-100: #d7f4d7;
  --color-core-green-0: #ebf9eb;
  --breakpoint-sm: 768px;
  --breakpoint-xs: 304px;
  --color-font-success: var(--color-core-green-1000);
  --color-font-warning: var(--color-core-orange-1000);
  --color-font-danger: var(--color-core-red-1000);
  --color-font-tertiary: var(--color-core-neutral-800);
  --color-font-secondary: var(--color-core-neutral-900);
  --color-font-primary: var(--color-core-neutral-1100);
  --color-brand-secondary: var(--color-core-purple-700);
  --color-brand-primary: var(--color-core-aqua-700);
  --color-border-primary: var(--color-core-neutral-300);
  --color-background-info: var(--color-core-blue-0);
  --color-background-success: var(--color-core-green-0);
  --color-background-warning: var(--color-core-orange-0);
  --color-background-danger: var(--color-core-red-0);
  --color-background-tertiary: var(--color-core-neutral-200);
  --color-background-secondary: var(--color-core-neutral-100);
  --color-background-primary: var(--color-core-neutral-0);
  --breakpoint-md: calc(var(--breakpoint-xs) / var(--breakpoint-sm));
  --color-font-interactive-disabled: var(--color-font-tertiary);
  --color-font-interactive-active: var(--color-brand-secondary);
  --color-font-interactive-hover: var(--color-brand-primary);
  --color-font-interactive: var(--color-brand-primary);
  --color-background-disabled: var(--color-background-tertiary);
}
`;
/* end snapshot css/variables with references should match snapshot */

snapshots["css/variables with selector should match snapshot"] = 
`/**
 * Do not edit directly
 * Generated on Sat, 01 Jan 2000 00:00:00 GMT
 */

.test {
  --breakpoint-xs: 304px;
  --breakpoint-sm: 768px;
  --breakpoint-md: calc(304px / 768px);
  --color-background-primary: #ffffff;
  --color-background-secondary: #f3f4f4;
  --color-background-tertiary: #dee1e1;
  --color-background-danger: #ffeae9;
  --color-background-warning: #ffede3;
  --color-background-success: #ebf9eb;
  --color-background-info: #e9f8ff;
  --color-background-disabled: #dee1e1;
  --color-border-primary: #c8cccc;
  --color-brand-primary: #0b8599;
  --color-brand-secondary: #6f5ed3;
  --color-core-green-0: #ebf9eb;
  --color-core-green-100: #d7f4d7;
  --color-core-green-200: #c2f2bd;
  --color-core-green-300: #98e58e;
  --color-core-green-400: #75dd66;
  --color-core-green-500: #59cb59;
  --color-core-green-600: #2bb656;
  --color-core-green-700: #0ca750;
  --color-core-green-800: #008b46;
  --color-core-green-900: #006b40;
  --color-core-green-1000: #08422f;
  --color-core-green-1100: #002b20;
  --color-core-teal-0: #e5f9f5;
  --color-core-teal-100: #cdf7ef;
  --color-core-teal-200: #b3f2e6;
  --color-core-teal-300: #7dead5;
  --color-core-teal-400: #24e0c5;
  --color-core-teal-500: #08c4b2;
  --color-core-teal-600: #00a99c;
  --color-core-teal-700: #0b968f;
  --color-core-teal-800: #067c7c;
  --color-core-teal-900: #026661;
  --color-core-teal-1000: #083f3f;
  --color-core-teal-1100: #002528;
  --color-core-aqua-0: #d9fcfb;
  --color-core-aqua-100: #c5f9f9;
  --color-core-aqua-200: #a5f2f2;
  --color-core-aqua-300: #76e5e2;
  --color-core-aqua-400: #33d6e2;
  --color-core-aqua-500: #17b8ce;
  --color-core-aqua-600: #0797ae;
  --color-core-aqua-700: #0b8599;
  --color-core-aqua-800: #0f6e84;
  --color-core-aqua-900: #035e73;
  --color-core-aqua-1000: #083d4f;
  --color-core-aqua-1100: #002838;
  --color-core-blue-0: #e9f8ff;
  --color-core-blue-100: #dcf2ff;
  --color-core-blue-200: #c7e4f9;
  --color-core-blue-300: #a1d2f8;
  --color-core-blue-400: #56adf5;
  --color-core-blue-500: #3896e3;
  --color-core-blue-600: #2b87d3;
  --color-core-blue-700: #2079c3;
  --color-core-blue-800: #116daa;
  --color-core-blue-900: #0c5689;
  --color-core-blue-1000: #0a3960;
  --color-core-blue-1100: #002138;
  --color-core-purple-0: #f2f2f9;
  --color-core-purple-100: #eaeaf9;
  --color-core-purple-200: #d8d7f9;
  --color-core-purple-300: #c1c1f7;
  --color-core-purple-400: #a193f2;
  --color-core-purple-500: #9180f4;
  --color-core-purple-600: #816fea;
  --color-core-purple-700: #6f5ed3;
  --color-core-purple-800: #5e4eba;
  --color-core-purple-900: #483a9c;
  --color-core-purple-1000: #2d246b;
  --color-core-purple-1100: #1d1d38;
  --color-core-magenta-0: #fef0ff;
  --color-core-magenta-100: #f9e3fc;
  --color-core-magenta-200: #f4c4f7;
  --color-core-magenta-300: #edadf2;
  --color-core-magenta-400: #f282f5;
  --color-core-magenta-500: #db61db;
  --color-core-magenta-600: #c44eb9;
  --color-core-magenta-700: #ac44a8;
  --color-core-magenta-800: #8f3896;
  --color-core-magenta-900: #6c2277;
  --color-core-magenta-1000: #451551;
  --color-core-magenta-1100: #29192d;
  --color-core-pink-0: #ffe9f3;
  --color-core-pink-100: #fcdbeb;
  --color-core-pink-200: #ffb5d5;
  --color-core-pink-300: #ff95c1;
  --color-core-pink-400: #ff76ae;
  --color-core-pink-500: #ef588b;
  --color-core-pink-600: #e0447c;
  --color-core-pink-700: #ce3665;
  --color-core-pink-800: #b22f5b;
  --color-core-pink-900: #931847;
  --color-core-pink-1000: #561231;
  --color-core-pink-1100: #2b1721;
  --color-core-red-0: #ffeae9;
  --color-core-red-100: #ffd5d2;
  --color-core-red-200: #ffb8b1;
  --color-core-red-300: #ff9c8f;
  --color-core-red-400: #ff7f6e;
  --color-core-red-500: #f76054;
  --color-core-red-600: #ed4c42;
  --color-core-red-700: #db3e3e;
  --color-core-red-800: #c63434;
  --color-core-red-900: #992222;
  --color-core-red-1000: #6d1313;
  --color-core-red-1100: #2b1111;
  --color-core-orange-0: #ffede3;
  --color-core-orange-100: #fcdccc;
  --color-core-orange-200: #ffc6a4;
  --color-core-orange-300: #ffb180;
  --color-core-orange-400: #ff9c5d;
  --color-core-orange-500: #fc8943;
  --color-core-orange-600: #f57d33;
  --color-core-orange-700: #ed7024;
  --color-core-orange-800: #ce5511;
  --color-core-orange-900: #962c0b;
  --color-core-orange-1000: #601700;
  --color-core-orange-1100: #2d130e;
  --color-core-neutral-0: #ffffff;
  --color-core-neutral-100: #f3f4f4;
  --color-core-neutral-200: #dee1e1;
  --color-core-neutral-300: #c8cccc;
  --color-core-neutral-400: #b0b6b7;
  --color-core-neutral-500: #929a9b;
  --color-core-neutral-600: #6e797a;
  --color-core-neutral-700: #515e5f;
  --color-core-neutral-800: #364141;
  --color-core-neutral-900: #273333;
  --color-core-neutral-1000: #162020;
  --color-core-neutral-1100: #040404;
  --color-core-yellow-0: #fff8e2;
  --color-core-yellow-100: #fdefcd;
  --color-core-yellow-200: #ffe99a;
  --color-core-yellow-300: #ffe16e;
  --color-core-yellow-400: #ffd943;
  --color-core-yellow-500: #ffcd1c;
  --color-core-yellow-600: #ffbc00;
  --color-core-yellow-700: #dd9903;
  --color-core-yellow-800: #ba7506;
  --color-core-yellow-900: #944c0c;
  --color-core-yellow-1000: #542a00;
  --color-core-yellow-1100: #2d1a05;
  --color-font-primary: #040404;
  --color-font-secondary: #273333;
  --color-font-tertiary: #364141;
  --color-font-interactive: #0b8599;
  --color-font-interactive-hover: #0b8599;
  --color-font-interactive-active: #6f5ed3;
  --color-font-interactive-disabled: #364141;
  --color-font-danger: #6d1313;
  --color-font-warning: #601700;
  --color-font-success: #08422f;
  --size-border-radius-large: 30rem;
  --size-font-small: 0.75rem;
  --size-font-medium: 1rem;
  --size-font-large: 1.5rem;
  --size-font-xl: 2.25rem;
  --size-padding-small: 0.5rem;
  --size-padding-medium: 1rem;
  --size-padding-large: 1rem;
  --size-padding-xl: 1rem;
}
`;
/* end snapshot css/variables with selector should match snapshot */

