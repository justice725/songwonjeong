![image](https://github.com/justice725/songwonjeong/assets/84830256/9383b857-0a1e-4d79-8713-1e43ac79c77e)1. 소스 다운로드하기!
 (1) 깃에서 clone 하기 위한 주소 복사하기
![1](https://github.com/justice725/songwonjeong/assets/84830256/a2c3f98a-6806-451f-bbae-3526c4ad94c2)

 (2) 원하는 위치에서 터미널 실행하기 ( 윈도우 기준으로 설명 )
  - 원하는 폴더에서 [SHIFT + 마우스 오른쪽 클릭] 을 하면 "여기에 PowerShell 창 열기" 선택지가 나옴.
  - powershell(cmd) 창에서 "" git clone https://github.com/justice725/songwonjeong.git "" 명령어 입력 ( 뒤에 폴더명을 넣어도 됨, 안넣으면 자동으로 깃레포지토리 이름으로 폴더가 생성됨. )
  - ![image](https://github.com/justice725/songwonjeong/assets/84830256/e60524a9-3af8-41b2-b7e0-c8d68ba1e7cf)
  - "" cd .\songwonjeong\ "" 명령어로 해당 폴더로 이동하기.
  - 해당 위치에서 "" code . "" 명령어를 실행하면 vscode가 실행됨.
  - ![image](https://github.com/justice725/songwonjeong/assets/84830256/e8df26ab-ceb9-44c6-b57b-3474c640137e)

  - ![image](https://github.com/justice725/songwonjeong/assets/84830256/8ec08a47-0a82-40c7-8257-5f81958fd8b0)
  - 해당 위치에서 터미널로 npm start 혹은 npm run start 명령어를 실행하면 오류가 뜬다. 이는 깃레포지토리에 올릴 때 .gitignore 설정에서 실행하는데 필수적인 npm 모듈을 제외하고 깃레포지토리에 업로드하기 때문이다.
  - 따라서, 로컬에서 "" npm i "" 명령어로 node 모듈을 다시 설치해줘야 한다.
  - ![image](https://github.com/justice725/songwonjeong/assets/84830256/98393095-c425-45b0-9ab2-251fee5a218c)
  - 설치를 완료하면 "" npm start "" 혹은 "" npm run start "" 명령어로 리액트 앱을 실행할 수 있다.



    2. 프로젝트 설명
       - 기본적으로 리액트에서 사용할 수 있는 Hook과 API 연동 방법, bootstrap css 라이브러리 등을 실습하기 위해 만든 코드이기 때문에 예제형식으로 작성되었다.
       - App.js에는 All Keeper의 index.html 파일을 넣어두었다. 문제가 되었던 api 연동을 실행하는 버튼 위치에는 DataButton.jsx 컴포넌트를 연결시켜놓았다.
       - DataButton.jsx 안에는 예시가 될 수 있는 영화 포스터에 대한 데이터를 저장해둔 api 서버를 연결해두었다. 실제 All Keeper 에서도 동일한 논리적 구조를 가진 바닐라js 형태로 된 코드를 사용하게 될 것이다.
       - App.js 가장 아래쪽에는 Bootstrap 실습을 할 수 있는 코드 컴포넌트를 연결시켜 두었는데, 그 컴포넌트는 CardCss.jsx 안에 정의되어 있다.
       - bootstrap react 에서 코드를 복사붙여넣기 하였고, 컴포넌트 자체를 분리해서 사용할 수 있다.
      
    3. 프로젝트 목적
       - 이후에는 원정이가 react 1타 강사가 될 때까지 React Hooks 실습 및 styled-components, tailwindcss 등과 같은 스타일 유지보수 라이브러리와 redux, react-query, recoil과 같은 상태관리 라이브러리 등을 실습하는 공간으로 활용할 것이다.
       - 실습예제를 보여주고 설명해주기 위한 공간이기 때문에 google drive 문서를 보면서 실제 실습해보고, 코드를 작성하며 막힐 때마다 참고용 자료로 보는 방식으로 활용했으면 좋겠다. 
    


