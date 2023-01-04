# 리덕스 미들웨어를 통한 비동기 작업 관리 

노션 링크:<br>
https://seokjuna.notion.site/18-1-71114f260d4942588dc6bfac92c04d46<br>
https://seokjuna.notion.site/18-2-2be96a2589874afc96e8901b36596638<br>

💡미들웨어란?<br>
- 리덕스 미들웨어는 액션을 디스패치했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행
- 액션과 리듀서 사이의 중간자 (액션 → 미들웨어 → 리듀서 → 스토어)
- 리듀서가 액션을 처리하기 전 미들웨어가 할 수 있는 작업들
    - 전달 받은 액션을 단순히 콘솔에 기록
    - 전달 받은 액션 정보를 기반으로 액션을 아예 취소
    - 다른 종류의 액션을 추가로 디스패치

<br>
React:<br>
- UI: Counter, Sample
- yarn: redux, react-redux, redux-actions, redux-logger, redux-thunk, axios, redux-saga, redux-devtools-extension<br>

<img width="400" alt="Counter" src="https://user-images.githubusercontent.com/102382351/210504824-74b22596-e221-4fa6-9593-1e5c7f303425.png"><br>

<img width="400" alt="Sample" src="https://user-images.githubusercontent.com/102382351/210504592-09965620-cd49-44e2-955e-7377d2671c6c.png">
