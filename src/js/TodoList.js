const TodoAddInput = document.querySelector(".TodoAddInput");

const TodoAddBtn = document.querySelector(".TodoAddBtn");

let TodoListItems = [];

//각 li에 id값을 붙여줄것이다. 이것을 이용해서 완료상태와 삭제를 해줄것
let ItemId = 0;

//AddBtn클릭시 액션
TodoAddBtn.addEventListener("click", (event) => {
  if (TodoAddInput.value) {
    //값이 없으면 false이다.

    let newItems = { id: ItemId, content: TodoAddInput.value };
    //객체를 만들어주고
    TodoListItems.push(newItems);
    //list배열에 객체를 추가해주었다.
    TodoAddInput.value = "";
    ItemId++;
    List();
  } else {
    TodoAddInput.focus();
    //아무것도 입력하지 않았으면 input창이 focus되도록 설정
  }
});

const TestBtn = document.querySelector(".test");
TestBtn.addEventListener("click", (event) => {
  console.log(TodoListItems);
  console.log("작동");
});

const List = () => {
  //*지역 변수로 선언해주는 것이 해당 함수 내에서만 유효하기에 함수의 생명주기와 일치한다. 또한 스코프체인 종점에 있는 전역 변수에 비해 검색 속도가 빠르다.
  const TodoList = document.querySelector(".TodoList");

  // 빈 문자열을 만들고, 해당 문자열에 각 요소를 담은 html를 +=로 쌓아주었다.
  let Item = "";
  //TodoListItems는 객체가 담긴 배열이다. append로 지저분했던 따로 따로 붙이는 방식대신 배열함수를 사용하여 가독성을 높이고자 했다.
  TodoListItems.forEach((el) => {
    Item += `<li class="item" id="${el.id}"><button class="CheckBtn"></button>${el.content}<button class="RemoveBtn"></button></li>`;
  });
  //탬플릿 리터널로 한번에 써줬다.

  //최종적으로 ul에 만든 li붙여준다.
  TodoList.innerHTML = Item;

  //RemoveBtn은 위의 생성을 거쳐야존재한다.
  //RemoveBtn은 여러개 생성됨에 따라 배열로 취급된다. index값으로 접근가능. 위와 같이 forEach로 이벤트를 등록해주었다.
  const RemoveBtn = document.querySelectorAll(".RemoveBtn");
  RemoveBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
      let newTodoList = TodoListItems.filter(
        (el) => el.id != event.target.parentElement.id
      );
      TodoListItems = newTodoList;
      event.target.parentNode.remove();
    });
  });
};
