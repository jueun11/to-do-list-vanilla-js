# to-do-list-vanilla-js

## 소개

to do list를 vanilla js만을 사용해서 구현해보았습니다.

## 목표

- 최근 React를 활용하여 웹사이트를 만들어보았는데, 정작 vanilla js로는 만들어보지않았기에 vanilla js와 React의 차이점을 설계부터 작동까지 확인해보고 싶었습니다. 또한 간단한 프로젝트이지만 vanilla js를 사용해보며 js자체의 이해도를 높여보고자 했습니다.

- commit message를 다듬어보려했습니다. 그간 개인 작업물은 특별한 양식 없이 작성하여 지저분했습니다. 앞으로는 프로젝트를 할 때만큼은 commit message를 일관된 구조로 작성하려합니다.

## 제작방식

- scss를 사용하였습니다.
- Prettier와 ESLint를 적용하였습니다.
- Webpack으로 환경을 세팅하였습니다.
- 순수 바닐라 자바스크립트만 사용하였습니다. (라이브러리 사용 x)
- SPA로 구현하였습니다.

## 기능

- input창에 텍스트를 입력하지 않을 경우 추가버튼을 눌러도 입력되지않고, input창에 focus됩니다.
- 추가한 항목을 삭제할 수 있습니다.

## 겪은 문제

### 문제

- 처음에 리스트 삭제 부분에서 splice로 데이터가 있는 객체를 관리하려했습니다. splice의 인자로 (e대상의 id값, 1)을 하였는데, 예를들어 값으로 [0,1,2,3,4,5]를 가지고 있는 배열이 있고, 2번째로 작성한 내용을 클릭하면 인자로 (2,1)이 들어가 [0,1,3,4,5,6] 가 됩니다. 이후 4번째로 작성한 4를 삭제하기 위해 4번째 요소를 클릭을 하게되면 인자로 (4,1)이 들어가게되고, [0,1,3,4,6] 를 반환하게 됩니다. splice를 사용하면 바뀐 배열의 index값에 따라 실행되기 때문에 원하는 대로 작동하지않았습니다.
- splice로 변형하면 각 요소의 인덱스 값이 변하는 기초적인 부분은 놓친 잘못이었습니다. 구조를 막연하게 생각하고 설계하기 보다는 확실하게 유효한지, 꼼꼼히 설계했어야하는 부분입니다.

### 해결

- 리스트 데이터를 객체로 만들었습니다. 기존에는 리스트에 입력값만 넣고 객체를 생성할때 li태그에 id값을 부여해서 정작 리스트 내에는 id값이 없었습니다. 개선으로는 리스트에 값을 객체로 담아 id값과 내용을 프로퍼티로 갖게 하였습니다. 결과적으로, 삭제 동작을 할 때 삭제대상의 id값과 일치하지 않는 것만 filter로 걸러주고 기존 리스트에 넣어주었습니다.

---

### 문제

- 인터넷에서 다른 투두리스트를 참고하면, for문을 통해 listItem들을 만들고, 이를 list에 붙여주었습니다. 하지만 저는 리스트를 추가할 때마다 기존의 리스트를 for문으로 전부 불러오는 것이 비효율적으로 느껴졌고, 각 요소를 추가할 때 append를 활용하여 큰틀(li)안에 버튼과 내용을 붙이고, list에 append를 마지막에 해주는 방식으로 하였습니다. for문으로 기존 리스트를 전부 불러오지 않는다는 것은 만족했지만, List함수의 내용이 너무 길어져서 가독성이 좋지않습니다. 리팩토링할 방법을 찾아야합니다.

### 해결

- 리플로우가 발생하는 조건을 제대로 파악하지 못해서 append로 붙여주는 작업을 한것이었습니다. append로 요소를 추가해도 결국 브라우저는 변화를 감지, 영향을 받은 모든 요소를 재생성합니다. 변화하지 않은 부분까지 랜더링되는 것이 React를 사용하지않은 js의 단점으로 느껴졌습니다. 때문에 코드의 가독성을 높이는 방향으로 수정하였습니다. 기존에 todo목록을 배열로 저장하고 가공했기에, forEach를 사용하여 li와 그 밑의 자식요소를 한번에 만들었습니다. index파일에 주석으로 달아두었습니다. 이러한 과정을 통해 성능은 같지만 더욱 가독성이 높은 간결한 코드를 작성하였습니다.
