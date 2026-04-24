# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Testloginapplication.spec.js >> Login Application
- Location: tests\Testloginapplication.spec.js:5:5

# Error details

```
ReferenceError: Cannot access 'homepage' before initialization
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6] [cursor=pointer]:
        - img "logo" [ref=e7]
        - heading "Learn Automation Courses" [level=1] [ref=e8]
      - generic:
        - img "menu"
        - generic [ref=e9]:
          - generic [ref=e10]:
            - text: Learn Automation Courses
            - img "delete"
          - generic [ref=e11]:
            - link "Home" [ref=e12] [cursor=pointer]:
              - /url: /
              - generic [ref=e13]: Home
            - link "Practise" [ref=e14] [cursor=pointer]:
              - /url: /practise
              - generic [ref=e15]: Practise
  - generic [ref=e17]:
    - generic [ref=e18]:
      - img "Login"
    - generic [ref=e19]:
      - generic [ref=e21]:
        - heading "Sign In" [level=2] [ref=e22]
        - textbox "Enter Email" [ref=e23]
        - textbox "Enter Password" [ref=e24]
        - button "Sign in" [ref=e25] [cursor=pointer]
        - link "New user? Signup" [ref=e26] [cursor=pointer]:
          - /url: /signup
      - generic [ref=e27]:
        - heading "Connect with us" [level=2] [ref=e28]
        - generic [ref=e29] [cursor=pointer]:
          - link [ref=e30]:
            - /url: https://youtube.com/MukeshOtwani
            - img [ref=e31]
          - link [ref=e34]:
            - /url: https://twitter.com/MukeshOtwani
            - img [ref=e35]
          - link [ref=e37]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
            - img [ref=e38]
          - link [ref=e40]:
            - /url: https://www.facebook.com/groups/256655817858291
            - img [ref=e41]
          - link [ref=e43]:
            - /url: https://learn-automation/reddit
            - img [ref=e44]
  - generic [ref=e58]:
    - generic [ref=e59]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e60]
      - heading "©2023 All rights reserved" [level=2] [ref=e61]
    - generic [ref=e62] [cursor=pointer]:
      - link [ref=e63]:
        - /url: https://youtube.com/MukeshOtwani
        - img [ref=e64]
      - link [ref=e67]:
        - /url: https://twitter.com/MukeshOtwani
        - img [ref=e68]
      - link [ref=e70]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
        - img [ref=e71]
      - link [ref=e73]:
        - /url: https://www.facebook.com/groups/256655817858291
        - img [ref=e74]
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { LoginPage } from '../pages/loginpage';
  3  | import { homepage } from '../pages/homepage';
  4  | 
  5  | test('Login Application', async ({ page }) => {
  6  | 
  7  |     await page.goto('https://freelance-learn-automation.vercel.app/login');
  8  |    
  9  |     const loginpage = new LoginPage(page);
> 10 |     const homepage = new homepage(page);
     |                      ^ ReferenceError: Cannot access 'homepage' before initialization
  11 | 
  12 |     await loginpage.login('admin@email.com', 'admin@123');
  13 |     await homepage.signout();
  14 | 
  15 | 
  16 | 
  17 | 
  18 | });
  19 | 
```