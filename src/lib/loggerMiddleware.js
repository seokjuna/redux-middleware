// 액션이 디스패치될 때마다 액션의 정보와 액션이 디스패치되기 전후의 상태를 
// 콘솔에 보여 주는 로깅 미들웨어

const loggerMiddleware = store => next => action => {
    console.group(action && action.type); // 액션 타입으로 log를 그룹화
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    next(action); // 다음 미들웨어 혹은 리듀서에게 전달
    console.log('다음 상태', store.getState()); // 업데이트된 상태
    console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;

// next 파라미터는 함수 형태이며, store.dispatch와 비슷한 역할
// 차이점은 next(action)을 호출하면 그다음 처리해야 할 미들웨어에게 액션을 넘겨주고
// 만약 그다음 미들웨어가 없다면 리듀서에게 액션을 넘겨줌