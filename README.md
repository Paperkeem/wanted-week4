# 📝 댓글 CRUD with Redux

## 📌 구현
<img width="80%" src="https://user-images.githubusercontent.com/107424974/214504313-012b7551-0a84-4ea2-b21c-6fb885d9c049.gif"/>
<br>
### 🗓 구현 일정 : 2023.01.16 - 01.17
<br>
### ![Team repo 바로 가기](https://github.com/wanted-onboarding8-6/pre-onboarding-8th-4week-6)

</br>

## 목차

1. [프로젝트 실행 방법](#프로젝트-실행-방법)
2. [구현사항](#구현사항)

</br>

## 프로젝트 실행 방법

<br>

```bash
# npm 설치
npm install
```

```bash
# Local Server 실행
npx json-server ./data.json --port 4000
```

```bash
# 로컬 서버에서 실행
npm start
```

<br>

## 기술스택

> React, TypeScript, Redux, axios, json-server, styled-components

<br>

## 구현사항

1. 댓글 CRUD 기능 구현

</br>

2. 페이지네이션

</br>

3. 댓글 작성, 수정, 삭제 후 동작
   - 댓글 작성하고 난 뒤: 다른 페이지에 위치하고 있었더라도 1페이지로 이동, 입력 폼 초기화
   - 댓글 수정하고 난 뒤: 현재 보고있는 페이지 유지, 입력 폼 초기화
   - 삭제하고 난 뒤: 1페이지로 이동

</br>

## 요구사항

- Redux 환경설정은 자유롭게 진행
   - Redux-saga or Redux-thunk 자유롭게 선택 가능
   - 미들웨어 사용안하는 것도 가능
- Redux logger, Redux-Devtools 설정 필수
- Redux를 이용한 비동기 처리 필수
