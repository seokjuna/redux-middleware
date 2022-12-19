import { createAction, handleActions } from "redux-actions";

// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기 (createAction 사용)
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);


// 초기 상태 및  리듀서 함수 만들기 (handleAction 사
const initialState = 0; // 상태는 꼭 객체일 필요는 없음

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    },
    initialState
);

export default counter;