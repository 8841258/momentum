# momentum
* LOGIN, CLOCK, QUOTES AND BACKGROUND, TO DO LIST, WEATHER 기능 만들기
* HTML, CSS, JAVASCRIPT가 아직 많이 부족한 것 같아서 노마드코더의 JS 강의를 듣게 되었다.


1. LOGIN (20210719~20210720)
- event
  dom과 관련된 이벤트가 발생하면 event 객체에 모두 저장된다. 매개변수로 event를 받는다.
  콘솔에 출력하면 각종 property와 method를 확인할 수 있다.
  이전에 버튼을 누를 때 깜빡했다가 사라지는 현상이 있었는데, event.preventDefault()를 사용하면 더이상 그런 현상이 생기지 않는다!
  
- localStorage
  브라우저에 기본적으로 저장할 수 있게 하는, 이른바 미니 DB이다.
  유저 정보 저장시 유용.
  개발자 도구 > application > localStorage
  .setItem("key", "value")  .getItem("key")  .removeItem("key")
  
- 깔끔한 코드 작성법
  반복되는 String은 오타 방지를 위해 대문자 변수로 저장한다. 변수는 틀리면 콘솔창에서 알려주기 때문.
  반복되는 부분은 함수로 따로 만들어준다. ex) paintGreetings(username).
  String과 변수의 결합은 백틱(`)을 사용하여 변수는 ${} 안에 넣어준다
  


