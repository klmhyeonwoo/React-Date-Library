`Moment`

##### 타임존 <br/>
moment / timezone 을 사용할 수 있다.

##### Format / 비교 <br/>
원하는 스타일로 표기 가능하다

##### 오래됨,, <br/>
Mutable / Tree shaking 알고리즘 제공 X

`Day.js`

##### 타임존 <br/>
plugin/timezone 과 plugin /utc를 셋업해서 타임존을 사용할 수 있다.

##### Format / 비교 <br/>
Moment 문법과 같이 원하는 스타일로 표기가 가능하다.

##### 가볍다 <br/>
Tree Shaking이 되지 않는다.

`Day.fns`

##### 타임존 <br/>
date-fns-fz를 import

##### Format / 비교 <br/>
원하는 스타일로 표기가 가능했다

##### 포괄적 <br/>
Immutable / Tree shaking이 가능하다.

##### 함수별 import <br/>
like. addWeeks

```
📦 
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
└─ src
   ├─ App.css
   ├─ App.js
   ├─ App.test.js
   ├─ components
   │  ├─ Datefns
   │  │  └─ DayfnsExample.jsx
   │  ├─ Dayjs
   │  │  └─ DayjsExample.jsx
   │  └─ Moment
   │     └─ MomentExample.jsx
   ├─ index.css
   ├─ index.js
   ├─ logo.svg
   ├─ reportWebVitals.js
   └─ setupTests.js
```
